/**
 * Lighthouse CI: аудит производительности production-сборки.
 *
 * Запуск: `npm run perf` (сборка + 3 прогона Lighthouse + проверка порогов).
 * Профиль — мобильный по умолчанию в Lighthouse: эмуляция телефона, симулированный
 * медленный 4G и замедление CPU в 4 раза. Метрики лабораторные, не полевые.
 *
 * Пороги в двух уровнях:
 *   error — бюджет регрессий: заданы с запасом от измеренной базовой линии,
 *           нарушение завершает команду с ошибкой;
 *   warn  — целевые значения Core Web Vitals («хорошо»), пока не достигнуты
 *           из-за тяжёлых фотографий; видны в отчёте, но не роняют проверку.
 *
 * Базовая линия (ноябрь 2026, 3 прогона, медиана): Performance 73, FCP 0,76 с,
 * LCP 17,0 с, TBT 87–345 мс, CLS 0, вес страницы 5,5 МБ, JS 74 КБ.
 */
const fs = require('node:fs');

/**
 * Браузер для аудита: CHROME_PATH, затем Chromium из Playwright
 * (`npm run test:e2e:install`), иначе chrome-launcher ищет установленный Chrome.
 */
function resolveChromePath() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  try {
    const path = require('playwright-core').chromium.executablePath();
    return fs.existsSync(path) ? path : undefined;
  } catch {
    return undefined;
  }
}

const isCI = Boolean(process.env.CI);
// Для будущей проверки развёрнутой копии, например preview-деплоя:
// LHCI_URL=https://… npx lhci autorun
const targetUrl = process.env.LHCI_URL;

module.exports = {
  ci: {
    collect: {
      ...(targetUrl ? { url: [targetUrl] } : { staticDistDir: './dist' }),
      numberOfRuns: 3,
      chromePath: resolveChromePath(),
      settings: {
        // Доступность уже проверяет axe в e2e/a11y.spec.ts — здесь только производительность
        onlyCategories: ['performance'],
        chromeFlags: isCI ? '--headless=new --no-sandbox' : '--headless=new',
      },
    },
    assert: {
      assertMatrix: [
        {
          // Бюджет регрессий: медиана трёх прогонов
          matchingUrlPattern: '.*',
          aggregationMethod: 'median',
          assertions: {
            'categories:performance': ['error', { minScore: 0.6 }],
            // Сетевые метрики при симулированном троттлинге почти не зависят от машины
            'first-contentful-paint': ['error', { maxNumericValue: 1800 }],
            'largest-contentful-paint': ['error', { maxNumericValue: 20000 }],
            'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
            // TBT зависит от скорости CPU машины, поэтому порог — граница «плохо», а не «хорошо»
            'total-blocking-time': ['error', { maxNumericValue: 600 }],
            // Размер ресурсов (байты, после сжатия)
            'total-byte-weight': ['error', { maxNumericValue: 6.5 * 1024 * 1024 }],
            'resource-summary:script:size': ['error', { maxNumericValue: 100 * 1024 }],
            // Сайт не загружает сторонние скрипты и сервисы
            'resource-summary:third-party:count': ['error', { maxNumericValue: 0 }],
          },
        },
        {
          // Цели Core Web Vitals «хорошо» (мобильные пороги Lighthouse)
          matchingUrlPattern: '.*',
          aggregationMethod: 'median',
          assertions: {
            'categories:performance': ['warn', { minScore: 0.9 }],
            'largest-contentful-paint': ['warn', { maxNumericValue: 2500 }],
            'total-blocking-time': ['warn', { maxNumericValue: 200 }],
            'speed-index': ['warn', { maxNumericValue: 3400 }],
            'image-delivery-insight': ['warn', { minScore: 0.9 }],
          },
        },
      ],
    },
    upload: {
      // Отчёты только локально; во внешние хранилища ничего не отправляется
      target: 'filesystem',
      outputDir: './.lighthouseci/reports',
    },
  },
};
