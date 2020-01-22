export default {
  /**
   * Doc: https://nuxtjs.org/api/configuration-servermiddleware/
   */
  serverMiddleware: [
    {
      path: '/rest',
      handler: '~/server-middleware/request-tracker',
    },
    {
      path: '/rest',
      handler: '~/server-middleware/api-cache',
    },
  ],
}
