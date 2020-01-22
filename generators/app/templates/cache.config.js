import env from './env'

export default {
  base: '/rest',
  redisOptions: env.redis,
  items: [
    // {
    //   name: 'homePageData',
    //   path: '/rest/V1/cms/block/identifier/homepage/0/',
    //   cacheKey(params, query, originalUrl) {
    //     return 'zc:k:amq_CMSBLOCKDEFAULTHOMEPAGEIDENTIFIER'
    //   },
    // },
  ],
  normalize(data) {
    return {
      cached: true,
      status: true,
      data,
    }
  },
}
