import getRoutes from './utils/getRoutes'

export default {
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Mike Mattner',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'UX/UI Designer & Developer in Michigan',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Fira+Code&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap',
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    // '@/node_modules/highlight.js/styles/nord.css',
    '@/assets/scss/app.scss',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/lazyimage.js',
    '~/plugins/imageContext.js',
    '~/plugins/VueFontAwesome.js',
    { src: '~/plugins/VueScrollReveal.js', ssr: false },
  ],
  components: {
    dirs: [
      '~/components/atoms',
      '~/components/decorative',
      '~/components/media',
      '~/components/molecules',
      '~/components/organisms',
      '~/components/work',
    ],
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-svg-loader',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/feed',
  ],
  feed: [
    {
      create: async (feed) => {
        const $content = require('@nuxt/content').$content
        feed.options = {
          title: 'Mike Mattner',
          link: 'https://mikemattner.com',
          description: 'Just another developer blog.',
        }

        const writing = await $content('writing').sortBy('date', 'asc').fetch()
        writing.forEach((article) => {
          const url = `https://mikemattner.com/writing/${article.slug}`
          feed.addItem({
            content: article.bodyHtml,
            date: new Date(article.date),
            description: article.description,
            id: url,
            link: url,
            title: article.title,
          })
        })
      },
      path: '/feed',
      type: 'rss2',
    },
  ],
  buildModules: ['@aceforth/nuxt-optimized-images'],
  optimizedImages: {
    optimizeImages: true,
  },
  styleResources: {
    scss: [
      '~/assets/scss/utils/_functions.scss',
      '~/assets/scss/utils/_variables.scss',
      '~/assets/scss/utils/_mixins.scss',
    ],
  },
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-nord.css',
      },
    },
    fullTextSearchFields: ['title', 'description', 'text', 'type'],
  },
  svgLoader: {
    svgoConfig: {
      plugins: [
        { prefixIds: false }, // Disables prefixing for SVG IDs
      ],
    },
  },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://fonts.googleapis.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      },
      {
        urlPattern: 'https://fonts.gstatic.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      },
    ],
  },
  generate: {
    fallback: '404.html',
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient, loaders }) {
      loaders.scss.additionalData = '@use "sass:math";'
      // Run ESLint on save
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
      config.module.rules.push({
        test: /\.yaml$/,
        loader: 'js-yaml-loader',
      })
    },
  },
  sitemap: {
    hostname: 'https://mikemattner.com',
    gzip: true,
    defaults: {
      changefreq: 'weekly',
      priority: 1,
      lastmod: new Date(),
    },
    routes() {
      return getRoutes()
    },
  },
}
