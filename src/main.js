import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

new Vue({
  // el: '#app',
  // router:router,
  render: h => {
    return h(App,{
      props: {
        title: 'Page Layouts'
      }
    })
  }
}).$mount("#app")
// export { app }
