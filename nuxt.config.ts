// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Mike Mattner',
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
  },
  css: ['@/assets/styles/app.scss'],
  modules: [
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxt/image-edge',
    'nuxt-svgo',
    'nuxt-icon',
  ],
})
