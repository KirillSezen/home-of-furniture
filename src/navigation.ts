import type { Messages } from './i18n/messages';

export type NavItem = {
  /** id секции на странице, на которую ведёт ссылка */
  id: string;
  /** Ключ подписи в messages.nav */
  labelKey: keyof Messages['nav'];
};

/** Разделы главной страницы — якоря на секции. */
export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'categories', labelKey: 'categories' },
  { id: 'catalog', labelKey: 'catalog' },
  { id: 'about', labelKey: 'about' },
  { id: 'contacts', labelKey: 'contacts' },
];
