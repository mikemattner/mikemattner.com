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
          content: 'UX/UI Designer & Developer in Michigan',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap',
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
  modules: ['@nuxt/content', '@vueuse/nuxt', '@nuxt/image-edge', 'nuxt-svgo', 'nuxt-icon', 'nuxt-module-feed'],
  content: {
    highlight: {
      theme: 'material-ocean',
      preload: ['vue'],
    },
    markdown: {
      anchorLinks: false,
    },
  },
  feed: {
    sources: [
      {
        path: '/feed.xml', // The route to your feed.
        type: 'rss2', // Can be: rss2, atom1, json1
        cacheTime: 60 * 15, // How long should the feed be cached
      },
    ],
  },
});
