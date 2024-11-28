import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  test: {
    globals: true,
    include: ['components/**/*.test.ts'],
    environment: 'nuxt',
    environmentOptions: {
      nuxt: {
        domEnvironment: 'jsdom',
        mock: {
          intersectionObserver: true,
          indexedDb: true,
        },
      },
    },
  },
});
