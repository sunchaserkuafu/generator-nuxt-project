import env from './env'

export default {
  version: env.version,
  env,
  server: {
    host: '0.0.0.0',
    port: env.port,
  },
}
