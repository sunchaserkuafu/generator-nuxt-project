export default {
  /**
   * Doc: https://nuxtjs.org/api/configuration-router
   */
  router: {
    extendRoutes(routes, resolve) {
      updateRoutePath(routes, 'categories-id', '/categories/:id+')
      updateRoutePath(routes, 'products-id', '/products/:id+')
    },
  },
}

function updateRoutePath(routes, name, path) {
  const index = routes.findIndex(route => route.name === name)
  const route = routes[index]
  const newRoute = Object.assign(route, { path })
  routes.splice(index, 1, newRoute)
}
