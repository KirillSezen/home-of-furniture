import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import App from './App';
import LanguageProvider from './i18n/LanguageProvider';

function renderApp() {
  const user = userEvent.setup();
  const view = render(
    <LanguageProvider>
      <App />
    </LanguageProvider>,
  );
  return { user, ...view };
}

const catalog = () => screen.getByRole('region', { name: /^(Каталог|Catalog)$/ });
const productNames = () =>
  within(catalog())
    .getAllByRole('article')
    .map((card) => within(card).getByRole('heading', { level: 3 }).textContent);

// Метатеги из index.html: провайдер языка обновляет их при смене языка
const META = [
  ['name', 'description'],
  ['property', 'og:title'],
  ['property', 'og:description'],
  ['property', 'og:locale'],
] as const;

beforeEach(() => {
  for (const [attr, value] of META) {
    const meta = document.createElement('meta');
    meta.setAttribute(attr, value);
    meta.setAttribute('content', '');
    document.head.append(meta);
  }
});

afterEach(() => {
  document.head.querySelectorAll('meta').forEach((meta) => meta.remove());
});

describe('главная страница', () => {
  it('показывает шапку, все разделы и подвал', () => {
    renderApp();

    // jsdom не учитывает, что <header> внутри <section> — не banner (в браузере это
    // проверяет axe в e2e), поэтому шапку сайта ищем как banner с основной навигацией
    const siteBanner = screen
      .getAllByRole('banner')
      .find((el) => within(el).queryByRole('navigation', { name: 'Основная навигация' }));
    expect(siteBanner).toBeInTheDocument();
    expect(within(siteBanner!).getByRole('group', { name: 'Язык сайта' })).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 1, name: 'Мебель для уютного дома' }),
    ).toBeInTheDocument();

    for (const name of ['Категории', 'Каталог', 'О магазине', 'Контакты']) {
      expect(screen.getByRole('region', { name })).toBeInTheDocument();
    }
  });

  it('навигация ведёт к существующим разделам', () => {
    renderApp();
    const nav = screen.getByRole('navigation', { name: 'Основная навигация' });
    const links = within(nav).getAllByRole('link');

    expect(links.map((link) => link.textContent)).toEqual([
      'Категории',
      'Каталог',
      'О магазине',
      'Контакты',
    ]);
    for (const link of links) {
      const id = link.getAttribute('href')!.slice(1);
      expect(document.getElementById(id), id).toBeInTheDocument();
    }
  });

  it('ссылки первого экрана ведут к каталогу и контактам', () => {
    renderApp();

    expect(screen.getByRole('link', { name: 'Смотреть каталог' })).toHaveAttribute(
      'href',
      '#catalog',
    );
    expect(screen.getByRole('link', { name: 'Связаться с нами' })).toHaveAttribute(
      'href',
      '#contacts',
    );
  });

  it('показывает контакты ссылками для звонка и письма', () => {
    renderApp();
    const contacts = screen.getByRole('region', { name: 'Контакты' });

    expect(within(contacts).getByRole('link', { name: '+1 (212) 555-0198' })).toHaveAttribute(
      'href',
      'tel:+12125550198',
    );
    expect(within(contacts).getByRole('link', { name: 'roadjhon517@gmail.com' })).toHaveAttribute(
      'href',
      'mailto:roadjhon517@gmail.com',
    );
  });
});

describe('каталог', () => {
  it('по умолчанию выбран фильтр «Все» и показаны все товары', () => {
    renderApp();

    expect(within(catalog()).getByRole('button', { name: /^Все/ })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    expect(productNames()).toHaveLength(6);
    expect(within(catalog()).getByText('Показано: 6 из 6')).toBeInTheDocument();
  });

  it('фильтрует товары по категории и отмечает выбранный фильтр', async () => {
    const { user } = renderApp();
    const bedroom = within(catalog()).getByRole('button', { name: /^Спальня/ });

    await user.click(bedroom);

    expect(bedroom).toHaveAttribute('aria-pressed', 'true');
    expect(within(catalog()).getByRole('button', { name: /^Все/ })).toHaveAttribute(
      'aria-pressed',
      'false',
    );
    expect(productNames()).toEqual(['Двуспальная кровать', 'Комод']);
    expect(within(catalog()).getByText('Показано: 2 из 6')).toBeInTheDocument();

    await user.click(within(catalog()).getByRole('button', { name: /^Все/ }));
    expect(productNames()).toHaveLength(6);
  });

  it.each([
    ['Гостиная', ['Трёхместный диван', 'Кресло для отдыха', 'Журнальный столик']],
    ['Столовая', ['Обеденная группа']],
    ['Хранение', ['Комод']],
  ])('фильтр «%s» показывает только свои товары', async (filter, expected) => {
    const { user } = renderApp();

    await user.click(within(catalog()).getByRole('button', { name: new RegExp(`^${filter}`) }));

    expect(productNames()).toEqual(expected);
  });

  it('фильтр работает с клавиатуры', async () => {
    const { user } = renderApp();
    const dining = within(catalog()).getByRole('button', { name: /^Столовая/ });

    dining.focus();
    await user.keyboard('{Enter}');
    expect(productNames()).toEqual(['Обеденная группа']);

    within(catalog())
      .getByRole('button', { name: /^Хранение/ })
      .focus();
    await user.keyboard(' ');
    expect(productNames()).toEqual(['Комод']);
  });

  it('карточка категории включает соответствующий фильтр каталога', async () => {
    const { user } = renderApp();
    const categories = screen.getByRole('region', { name: 'Категории' });
    const link = within(categories).getByRole('link', { name: /^Хранение/ });

    expect(link).toHaveAttribute('href', '#catalog');
    await user.click(link);

    expect(within(catalog()).getByRole('button', { name: /^Хранение/ })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    expect(productNames()).toEqual(['Комод']);
  });
});

describe('переключение языка', () => {
  it('при первом посещении страница на русском', () => {
    renderApp();

    expect(document.documentElement).toHaveAttribute('lang', 'ru');
    expect(document.title).toBe('Home Of Furniture — мебель для дома');
    expect(screen.getByRole('button', { name: /Русский/ })).toHaveAttribute('aria-pressed', 'true');
  });

  it('переводит интерфейс и обновляет атрибуты страницы без перезагрузки', async () => {
    const { user } = renderApp();

    await user.click(screen.getByRole('button', { name: /English/ }));

    expect(
      screen.getByRole('heading', { level: 1, name: 'Furniture for a cozy home' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: 'Catalog' })).toBeInTheDocument();
    expect(productNames()).toContain('Three-seat sofa');
    expect(screen.getByRole('button', { name: /English/ })).toHaveAttribute('aria-pressed', 'true');

    expect(document.documentElement).toHaveAttribute('lang', 'en');
    expect(document.title).toBe('Home Of Furniture — furniture for your home');
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
      'content',
      expect.stringMatching(/^Furniture store website/),
    );
    expect(document.querySelector('meta[property="og:locale"]')).toHaveAttribute(
      'content',
      'en_US',
    );
  });

  it('сохраняет выбор и восстанавливает его при следующем посещении', async () => {
    const { user, unmount } = renderApp();
    await user.click(screen.getByRole('button', { name: /English/ }));
    unmount();

    renderApp();

    expect(document.documentElement).toHaveAttribute('lang', 'en');
    expect(
      screen.getByRole('heading', { level: 1, name: 'Furniture for a cozy home' }),
    ).toBeInTheDocument();
  });

  it('сохраняет выбранный фильтр каталога при смене языка', async () => {
    const { user } = renderApp();
    await user.click(within(catalog()).getByRole('button', { name: /^Спальня/ }));

    await user.click(screen.getByRole('button', { name: /English/ }));

    expect(within(catalog()).getByRole('button', { name: /^Bedroom/ })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    expect(productNames()).toEqual(['Double bed', 'Chest of drawers']);
  });
});
