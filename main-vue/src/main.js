import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
// Vue.use(ElementUI)

// Vue.config.productionTip = false

// 引入乾坤
import { registerMicroApps, start, initGlobalState } from "qiankun"

Vue.use(ElementUI)
// Vue.use(less)
// Vue.use(Vuex)
Vue.config.productionTip = false

let propsData = {
  sex: "女",
  age: 18,
  userName: "小莫",
}
const actions = initGlobalState(propsData)
// 主项目项目监听和修改（在项目中任何需要监听的地方进行监听）
actions.onGlobalStateChange((state, prev) => {
  //state变更后的状态，prev变更前的状态
  console.log("改变前的值", prev)
  console.log("改变后的值", state)
})
//将actions对象绑到Vue原型上，为了项目中其他地方方便使用
Vue.prototype.$actions = actions

const apps = [
  {
    name: "vue", //个人介绍
    entry: "//localhost:8081", //默认会加载这个html解析里面的js动态的执行(子应用必须支持跨域)fetch
    container: "#introduction", //容器名
    activeRule: "/main/introduction", //激活的路径
    props: propsData,
  },
  // {
  //   name: "vue3Crud", //vue3后台管理
  //   entry: "//localhost:8082", //默认会加载这个html解析里面的js动态的执行(子应用必须支持跨域)fetch
  //   container: "#vueCrud", //容器名
  //   activeRule: "/main/vueCrud", //激活的路径
  //   props: propsData,
  // },
]

registerMicroApps(apps) //注册应用
start({
  prefetch: false, //取消预加载
}) //开启
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
