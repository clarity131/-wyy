import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [{
  path: '/',
  name: 'home',
  component: () => import('@/components/Home.vue')
}]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router