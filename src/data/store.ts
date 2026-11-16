/**
 * Данные магазина. Реальные сведения пока не предоставлены.
 *
 * Чтобы заменить заглушку, заполните `value`, например:
 *   phone: { label: 'Телефон', placeholder: 'Номер телефона', value: '+7 900 000-00-00' }
 * Пока `value` пустое, на странице выводится `placeholder` в пунктирной рамке.
 */
export type StoreField = {
  /** Подпись поля в блоке контактов */
  label: string;
  /** Что показать, пока нет реального значения */
  placeholder: string;
  /** Реальное значение; пока не задано */
  value?: string;
};

export type StoreFieldKey = 'name' | 'phone' | 'email' | 'address' | 'hours';

export const STORE: Record<StoreFieldKey, StoreField> = {
  name: { label: 'Название', placeholder: 'Название магазина' },
  phone: { label: 'Телефон', placeholder: 'Номер телефона' },
  email: { label: 'Почта', placeholder: 'Адрес электронной почты' },
  address: { label: 'Адрес', placeholder: 'Адрес магазина' },
  hours: { label: 'Часы работы', placeholder: 'Дни и часы работы' },
};

/** Текст поля: реальное значение или заглушка */
export function storeText(field: StoreField): string {
  return field.value ?? field.placeholder;
}
