import path from 'path'
/* eslint-disable */
const glob = require('glob')
const hljs = require('highlight.js')
const md = require('markdown-it')({
  html: true,
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (__) {}
    }

    return '' // use external default escaping
  }
})
/* eslint-enable */
let files = glob.sync( '**/*.md' , { cwd: 'articles' });

function getSlugs(post, _) {
  let slug = post.substr(0, post.lastIndexOf('.'));
  return `/${slug}`;
}

export default {
  mode: 'universal',

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
        content: 'UX designer & developer in Michigan'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    '@/node_modules/highlight.js/styles/nord.css',
    '@/assets/scss/app.scss'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/ComponentRegister.js',
    '~/plugins/lazyimage.js',
    '~/plugins/imageContext.js',
    '~/plugins/VueFontAwesome.js',
    { src: '~/plugins/VueScrollReveal.js', ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-svg-loader',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap',
    '@nuxt/content'
  ],
  sitemap: {
    gzip: true,
    routes: function() {
      return files.map(getSlugs)
    }
  },
  styleResources: {
    scss: [
      '~/assets/scss/utils/_functions.scss',
      '~/assets/scss/utils/_variables.scss',
      '~/assets/scss/utils/_mixins.scss'
    ]
  },
  svgLoader: {
    svgoConfig: {
      plugins: [
        { prefixIds: false } // Disables prefixing for SVG IDs
      ]
    }
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
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: 'https://fonts.gstatic.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      }
    ]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.module.rules.push({
        test: /\.yaml$/,
        loader: 'js-yaml-loader'
      })
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'articles'),
        options: {
          markdown: body => {
            return md.render(body)
          }
        }
      })
    }
  },
  /**
   * Dynamic route generation
   */
  generate: {
    routes: function() {
      return files.map(getSlugs)
    }
  }
}
