import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import store from './store';
import router from '@/router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);
import * as eCharts from 'echarts';
app.provide('myAxios', eCharts);

app.use(store).use(router).use(ElementPlus).mount('#app');
