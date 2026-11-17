import { defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config.ts';

// Модульные и компонентные тесты. Берёт настройки сборки из vite.config.ts,
// поэтому импорт картинок, CSS и JSX работает так же, как в приложении.
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      include: ['src/**/*.test.{ts,tsx}'],
      setupFiles: ['./src/test/setup.ts'],
      restoreMocks: true,
    },
  }),
);
