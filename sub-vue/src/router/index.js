import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/myself",
  },
  {
    path: "/myself",
    name: "myself",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MySelf.vue"),
  },
]

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
})

export default router
