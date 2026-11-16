export type NavItem = {
  /** id секции на странице, на которую ведёт ссылка */
  id: string;
  label: string;
};

/** Разделы главной страницы — якоря на секции. */
export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'categories', label: 'Категории' },
  { id: 'collection', label: 'Подборка' },
  { id: 'about', label: 'О магазине' },
  { id: 'contacts', label: 'Контакты' },
];
