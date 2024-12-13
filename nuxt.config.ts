import { defineNuxtConfig } from 'nuxt/config';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'description',
          content: 'Designer & Developer in Michigan',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap',
        },
        {
          rel: 'alternate',
          type: 'application/rss+xml',
          title: 'Mike Mattner',
          href: 'https://mikemattner.com/rss.xml',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  router: {
    options: {
      strict: true,
    },
  },
  css: ['@/assets/styles/app.scss'],
  modules: ['@nuxt/content', '@vueuse/nuxt', 'nuxt-svgo', 'nuxt-icon', 'floating-vue/nuxt', '@nuxt/test-utils/module'],
  content: {
    highlight: {
      theme: 'material-theme-ocean',
      preload: ['vue'],
    },
    markdown: {
      anchorLinks: false,
    },
    experimental: {
      search: {
        indexed: true,
        options: {
          fields: ['title', 'content'],
          storeFields: ['title', 'content'],
          searchOptions: {
            prefix: true,
            fuzzy: 0.2,
            boost: {
              title: 4,
              content: 2,
            },
          },
        },
      },
    },
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/rss.xml', '/404.html'],
    },
  },
});
