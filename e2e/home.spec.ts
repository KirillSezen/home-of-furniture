import { expect, test } from '@playwright/test';

// Основные пользовательские сценарии на production-сборке.
// Локаторы — по ролям и доступным именам; ожидания — через web-first проверки
// (expect автоматически ждёт нужного состояния, без фиксированных задержек).

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('открывает главную страницу на русском со всеми разделами', async ({ page, request }) => {
  await expect(page).toHaveTitle('Home Of Furniture — мебель для дома');
  await expect(page.locator('html')).toHaveAttribute('lang', 'ru');
  await expect(
    page.getByRole('heading', { level: 1, name: 'Мебель для уютного дома' }),
  ).toBeVisible();

  for (const name of ['Категории', 'Каталог', 'О магазине', 'Контакты']) {
    await expect(page.getByRole('region', { name })).toBeAttached();
  }
  await expect(page.getByRole('contentinfo')).toBeAttached();

  const favicon = await request.get('/favicon.svg');
  expect(favicon.ok()).toBe(true);
  expect(favicon.headers()['content-type']).toContain('image/svg+xml');
});

test('навигация в шапке ведёт к выбранному разделу', async ({ page }) => {
  const nav = page.getByRole('navigation', { name: 'Основная навигация' });

  await nav.getByRole('link', { name: 'Контакты' }).click();

  await expect(page).toHaveURL(/#contacts$/);
  // «Контакты» есть и в подвале, поэтому берём заголовок именно секции
  const contacts = page.getByRole('region', { name: 'Контакты' });
  await expect(contacts.getByRole('heading', { level: 2 })).toBeInViewport();
});

test('переключает язык, обновляет страницу и запоминает выбор', async ({ page }) => {
  await page.getByRole('button', { name: /English/ }).click();

  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page).toHaveTitle('Home Of Furniture — furniture for your home');
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    'content',
    /^Furniture store website/,
  );
  await expect(
    page.getByRole('heading', { level: 1, name: 'Furniture for a cozy home' }),
  ).toBeVisible();
  await expect(page.getByRole('button', { name: /English/ })).toHaveAttribute(
    'aria-pressed',
    'true',
  );

  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible();

  await page.getByRole('button', { name: /Русский/ }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'ru');
  await expect(
    page.getByRole('heading', { level: 1, name: 'Мебель для уютного дома' }),
  ).toBeVisible();
});

test('фильтрует каталог по категории', async ({ page }) => {
  await page.getByRole('link', { name: 'Смотреть каталог' }).click();
  await expect(page).toHaveURL(/#catalog$/);

  const catalog = page.getByRole('region', { name: 'Каталог' });
  const cards = catalog.getByRole('article');
  await expect(cards).toHaveCount(6);

  const bedroom = catalog.getByRole('button', { name: /^Спальня/ });
  await bedroom.click();

  await expect(bedroom).toHaveAttribute('aria-pressed', 'true');
  await expect(catalog.getByRole('button', { name: /^Все/ })).toHaveAttribute(
    'aria-pressed',
    'false',
  );
  await expect(cards.getByRole('heading', { level: 3 })).toHaveText([
    'Двуспальная кровать',
    'Комод',
  ]);
  await expect(catalog.getByText('Показано: 2 из 6')).toBeVisible();

  await catalog.getByRole('button', { name: /^Все/ }).click();
  await expect(cards).toHaveCount(6);
});

test('фильтр каталога работает с клавиатуры', async ({ page }) => {
  const catalog = page.getByRole('region', { name: 'Каталог' });
  const dining = catalog.getByRole('button', { name: /^Столовая/ });

  await dining.focus();
  await page.keyboard.press('Enter');

  await expect(dining).toHaveAttribute('aria-pressed', 'true');
  await expect(catalog.getByRole('article')).toHaveCount(1);
  await expect(catalog.getByRole('heading', { level: 3 })).toHaveText(['Обеденная группа']);
});

test('карточка категории открывает каталог с нужным фильтром', async ({ page }) => {
  const categories = page.getByRole('region', { name: 'Категории' });

  await categories.getByRole('link', { name: /^Гостиная/ }).click();

  await expect(page).toHaveURL(/#catalog$/);
  const catalog = page.getByRole('region', { name: 'Каталог' });
  await expect(catalog.getByRole('button', { name: /^Гостиная/ })).toHaveAttribute(
    'aria-pressed',
    'true',
  );
  await expect(catalog.getByRole('heading', { level: 3 })).toHaveText([
    'Трёхместный диван',
    'Кресло для отдыха',
    'Журнальный столик',
  ]);
  await expect(catalog.getByRole('heading', { level: 2 })).toBeInViewport();
});
