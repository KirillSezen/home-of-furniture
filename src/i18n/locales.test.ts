import { describe, expect, it, vi } from 'vitest';

import { DEFAULT_LOCALE, readStoredLocale, storeLocale } from './locales';

describe('сохранение языка', () => {
  it('при первом посещении выбирает русский', () => {
    expect(DEFAULT_LOCALE).toBe('ru');
    expect(readStoredLocale()).toBe('ru');
  });

  it('восстанавливает сохранённый выбор', () => {
    storeLocale('en');
    expect(readStoredLocale()).toBe('en');

    storeLocale('ru');
    expect(readStoredLocale()).toBe('ru');
  });

  it('игнорирует неизвестное значение в хранилище', () => {
    window.localStorage.setItem('home-of-furniture:locale', 'de');
    expect(readStoredLocale()).toBe('ru');
  });

  it('не падает, если localStorage недоступен', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('SecurityError');
    });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('QuotaExceededError');
    });

    expect(() => storeLocale('en')).not.toThrow();
    expect(readStoredLocale()).toBe('ru');
  });
});
