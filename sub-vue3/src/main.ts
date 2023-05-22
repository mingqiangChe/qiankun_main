import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import "virtual:windi.css"
import "ant-design-vue/dist/antd.css"
import Antd from "ant-design-vue"
import { createPinia } from "pinia"
import router from "./router"
// 全局引入
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

createApp(App)
  .use(createPinia())
  .use(Antd)
  .use(ElementPlus)
  .use(router)
  .mount("#app")
