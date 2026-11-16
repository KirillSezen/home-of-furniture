export type NavItem = {
  /** id секции на странице, на которую ведёт ссылка */
  id: string;
  label: string;
};

/** Разделы страницы. Пока это якоря на одностраничном каркасе. */
export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'catalog', label: 'Каталог' },
  { id: 'about', label: 'О магазине' },
  { id: 'contacts', label: 'Контакты' },
];
