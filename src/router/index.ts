import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/pinia',
    name: 'pinia',
    meta: {
      title: 'pinia',
      keepAlive: true,
      requireAuth: false
    },
    component: () => import('@/components/usePinia.vue')
  },
  {
    path: '/vueuse',
    name: 'vueuse',
    meta: {
      title: 'vueuse',
      keepAlive: true,
      requireAuth: false
    },
    component: () => import('@/components/vueUse.vue')
  },
  {
    path: '/request',
    name: 'request',
    meta: {
      title: 'request',
      keepAlive: true,
      requireAuth: false
    },
    component: () => import('@/components/request.vue')
  },
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true
    },
    component: () => import('@/components/usePinia.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;