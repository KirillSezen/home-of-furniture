import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import type { Page } from '@playwright/test';

// Автоматическая проверка доступности по правилам WCAG 2.2 A/AA (axe-core).
// Покрывает только то, что можно проверить автоматически: контраст, имена
// элементов, роли, структуру. Ручную проверку с клавиатурой и скринридером не заменяет.
const WCAG_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

async function axeViolations(page: Page) {
  const results = await new AxeBuilder({ page }).withTags(WCAG_TAGS).analyze();
  // Короткий отчёт: правило, серьёзность и первые элементы с нарушением
  return results.violations.map((violation) => ({
    rule: violation.id,
    impact: violation.impact,
    help: violation.help,
    targets: violation.nodes.slice(0, 5).map((node) => node.target.join(' ')),
  }));
}

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

test('главная страница на русском без нарушений WCAG A/AA', async ({ page }) => {
  expect(await axeViolations(page)).toEqual([]);
});

test('главная страница на английском без нарушений WCAG A/AA', async ({ page }) => {
  await page.getByRole('button', { name: /English/ }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');

  expect(await axeViolations(page)).toEqual([]);
});

test('каталог с выбранным фильтром без нарушений WCAG A/AA', async ({ page }) => {
  const catalog = page.getByRole('region', { name: 'Каталог' });
  await catalog.getByRole('button', { name: /^Хранение/ }).click();
  await expect(catalog.getByRole('article')).toHaveCount(1);

  expect(await axeViolations(page)).toEqual([]);
});
