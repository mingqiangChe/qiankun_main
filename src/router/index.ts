import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/pinia',
        name: 'pinia',
        meta: {
            title: 'pinia',
            keepAlive: true,
            requireAuth: false,
        },
        component: () => import('@/components/usePinia.vue'),
    },
    {
        path: '/vueuse',
        name: 'vueuse',
        meta: {
            title: 'vueuse',
            keepAlive: true,
            requireAuth: false,
        },
        component: () => import('@/components/vueUse.vue'),
    },
    //验证请求
    {
        path: '/request',
        name: 'requests',
        meta: {
            title: 'requests',
            keepAlive: true,
            requireAuth: false,
        },
        component: () => import('@/components/requestEle.vue'),
    },
    // 大数据可视化
    {
        path: '/datav',
        name: 'datav',
        meta: {
            title: 'datav',
            keepAlive: true,
            requireAuth: false,
        },
        component: () => import('@/pages/datav.vue'),
    },
    {
        path: '/dataMap',
        name: 'dataMap',
        meta: {
            title: 'dataMap',
            keepAlive: true,
            requireAuth: false,
        },
        component: () => import('@/pages/datav/dataMap.vue'),
    },
    {
        path: '/',
        name: 'Index',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@/pages/mainH.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
