import env from './nuxt.config.env'
import router from './nuxt.config.router'
import modules from './nuxt.config.modules'
import plugins from './nuxt.config.plugins'
import build from './nuxt.config.build'
import head from './nuxt.config.head.js'
import serverMiddleware from './nuxt.config.server-middleware'
import css from './nuxt.config.css'

export default {
  mode: 'universal',
  ...css,
  ...head,
  ...serverMiddleware,
  ...build,
  ...env,
  ...router,
  ...modules,
  ...plugins,
}
