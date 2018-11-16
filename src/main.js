import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
})

window._APP_VM = new Vue({
  // el: '#app',
  router:router,
  render: h => {
    return h(App,{
      props: {
        title: 'Page Layouts'
      }
    })
  }
}).$mount("#app")
// export { app }
