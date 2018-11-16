// import Article from './components/Article.vue'
// import Landing from './components/Landing.vue'

function loadComponent(view) {
  console.log(`./components/${view}.vue`)
  return () => import(/* webpackChunkName: "view-[request]" */ `./components/${view}.vue`)
}

export const routes = [
  { path: '/', name: 'article', component: loadComponent('Article') },
  { path: '/landing', name: 'landing', component: loadComponent('Landing') }
]
