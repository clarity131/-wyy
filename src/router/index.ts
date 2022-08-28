import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [{
  path: '/',
  name: 'home',
  component: () => import('@/views/Home.vue')
  },
  {
    path: '/itemMusic',
    name: 'itemMusic',
    component: () => import('@/views/itemMusic.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue')
},
{
    path: '/:pathMatch(.*)',
    redirect: '/404'
},
{
  path: '/search',
  name: 'search',
  component: () => import('@/views/search.vue')
}
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router