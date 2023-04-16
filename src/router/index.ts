import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "main",
    meta: {
      title: "main",
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import("../pages/main.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import("../pages/login/index.vue"),
  },
  {
    path: "/table",
    name: "table",
    meta: {
      title: "table",
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import("../pages/tableCrund/index.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
