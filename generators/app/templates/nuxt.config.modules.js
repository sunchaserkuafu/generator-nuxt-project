import env from './env'

export default {
  /*
   ** Nuxt.js modules
   */
  modules: [
    // recommend add to the first
    '~/modules/logger/module',
    // Doc: TODO
    '~/modules/error-handler',
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // Doc: https://github.com/nuxt-community/svg-sprite-module
    '@nuxtjs/svg-sprite',
    // Doc: https://github.com/nuxt-community/device-module
    '@nuxtjs/device',
    // Doc: TODO
    'nuxt-api-module',
    // filters Module
    '~/modules/filters/module',
    // directives Module
    '~/modules/directives/module',
    // Doc: https://nuxtjs.org/faq/cached-components/
    [
      '@nuxtjs/component-cache',
      {
        max: 10000,
        maxAge: 1000 * 60 * 60,
      },
    ],
    // Doc: https://github.com/arash16/nuxt-ssr-cache
    'nuxt-ssr-cache',
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/toast
    '@nuxtjs/toast',
  ],
  /**
   * Page cache module configuration
   * See https://github.com/arash16/nuxt-ssr-cache
   */
  cache: {
    // if you're serving multiple host names (with differing
    // results) from the same server, set this option to true.
    // (cache keys will be prefixed by your host name)
    // if your server is behind a reverse-proxy, please use
    // express or whatever else that uses 'X-Forwarded-Host'
    // header field to provide req.hostname (actual host name)
    useHostPrefix: false,
    pages: [
      // these are prefixes of pages that need to be cached
      // if you want to cache all pages, just include '/'
      '/faq',
      '/privacy-policy',
      // '/login',
    ],
    store: {
      type: 'memory',
      // maximum number of pages to store in memory
      // if limit is reached, least recently used page
      // is removed.
      max: 100,
      // number of seconds to store this page in cache
      ttl: 60 * 10,
    },
  },
  /**
   * Api module configuration
   * See TODO
   */
  api: {
    dir: '~/api/',
    suffix: 'Api',
  },
  /**
   * Axios module configuration
   * See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true,
  },
  /**
   * Proxy module configuration
   * See https://github.com/nuxt-community/proxy-module
   */
  proxy: {
    '/rest': {
      target: env.api,
      cookieDomainRewrite: env.domain,
    },
  },
  /**
   * Style resources configuration
   * See https://github.com/nuxt-community/style-resources-module#scss-example
   */
  styleResources: {
    scss: [
      '~/assets/scss/_functions.scss',
      '~/assets/scss/_mixins.scss',
      '~/assets/scss/_variables.scss',
    ],
  },
  /**
   * svg-sprite-module options
   * see https://github.com/nuxt-community/svg-sprite-module#options
   */
  svgSprite: {
    input: '~/assets/svg/',
    elementClass: 'v-svg-icon',
    spriteClassPrefix: 'v-svg-icon--',
    defaultSprite: 'default',
  },
  /**
   * toast module options
   */
  toast: {
    position: 'top-center',
    duration: 3000,
    singleton: true,
  },
  logger: {
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
    client: {},
    server: {
      logsDir: '~/logs',
    },
  },
}
