/* spell-checker:words autorestart */
module.exports = {
  apps: [
    {
      name: '<%= appname %>',
      script: './node_modules/@nuxt/cli/bin/nuxt-cli.js',
      args: ' start',
      instances: -1,
      exec_mode: 'cluster',
      watch: false,
      max_memory_restart: '1G',
      max_restarts: 10,
      autorestart: true,

      env: {
        NODE_ENV: 'production',
      },
      env_staging: {
        NODE_ENV: 'staging',
      },
      env_qa: {
        NODE_ENV: 'qa',
      },
      env_integration: {
        NODE_ENV: 'integration',
      },
    },
  ],
}
