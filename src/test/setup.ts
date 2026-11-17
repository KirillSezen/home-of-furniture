import '@testing-library/jest-dom/vitest';

import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Каждый тест начинается как первое посещение: без сохранённого языка
// и с исходными атрибутами документа.
afterEach(() => {
  cleanup();
  window.localStorage.clear();
  document.documentElement.removeAttribute('lang');
  document.title = '';
  window.location.hash = '';
});
