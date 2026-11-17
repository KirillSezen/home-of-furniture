/**
 * Данные магазина. Значения ниже ещё должен подтвердить владелец (см. чек-лист в README).
 *
 * Подписи полей и тексты-заглушки на обоих языках — в src/i18n/messages.ts
 * (contacts.labels и contacts.placeholders). Если значение удалить или оставить
 * undefined, на странице появится заглушка в пунктирной рамке.
 */
export type StoreFieldKey = 'name' | 'phone' | 'email' | 'address' | 'hours';

export const STORE: Record<StoreFieldKey, string | undefined> = {
  name: 'Home Of Furniture',
  phone: '+1 (212) 555-0198',
  email: 'roadjhon517@gmail.com',
  address: 'New York, st. Some, 51/2',
  hours: 'Mon - Fri (9:00 - 18:00), Sat - Sun (9:00 - 14:00)',
};
