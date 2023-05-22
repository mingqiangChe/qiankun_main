<!-- 表格组件 -->
<template>
  <div class="container">
    <!-- 店铺 -->
    <shopmanagement :shops="shops" @add-shops="addShoops"   @search-event="searchevent" v-if="asideIndex=='1-1'"></shopmanagement>
    <!-- 商品 -->
    <goodss :goods="goods" @goodsse="goodsse" @add-goods="addgoods" v-else-if="asideIndex=='1-2'"></goodss>
    <!-- 订单查看 -->
    <order :orderList="orderList" @orderse="orderse" v-else></order>
  </div>
</template>
<script setup lang="ts">
import shopmanagement from "../../components/tableCrund/shopManagement.vue"
import goodss from '../../components/tableCrund/shopGoods.vue'
import order from '../../components/tableCrund/order.vue'
import { ref,reactive } from 'vue'
import axios from 'axios'
const baseURL = 'http://localhost'
const api = axios.create({
  baseURL,
  timeout: 5000,
  headers: {'X-Requested-With': 'XMLHttpRequest','content-type': 'application/json'},
})
api.get('/user').then((res) => {
  console.log(res);
  
}).catch((err) => {
  console.log(err,'捕捉接口错误');
})
   
function getShops() {
   // const requestRes = async () => {
    //     let result = await API.login('zhangsan', '123456');
    // }
    console.log('获取数据');
}
getShops()

const shops = reactive([
  { shoopName: '北京全聚德', location: '北京', rating: '1级' },
  { shoopName: '狗不理包子', location: '天津', rating: '2级' },
])
// 商品管理
interface good{
  shoopName: string
  shopId: string
  price:string
}
const goods:good[] = reactive([
  { shoopName: '北京全聚德', shopId: '北京', price: '1级' },
  { shoopName: '北京全聚德', shopId: '北京', price: '1级' }
])
//订单查看数据
interface order {
  shopId: string
  userId: string
  shopNum: string
  address: string
}
const orderList: order[] = [
  {
    shopId: '1',
    userId: '23',
    shopNum:'李白',
    address: '北京',
  },
 {
    shopId: '2',
    userId: '223',
    shopNum:'李小白',
    address: '深圳',
  },{
    shopId: '3',
    userId: '233',
    shopNum:'李白',
    address: '北京',
  }
]
interface Props{
  asideIndex:string
}
withDefaults(defineProps<Props>(), {
  asideIndex:'1-1'
})
// 添加店铺
const addShoops = (params:object) => {
  console.log(params,'添加店铺');
  console.log(shops);
  // shops.push(params)
}
//添加商品
const addgoods = (params:object) => {
  console.log(params,'添加店铺');
  console.log(goods);
  // goods.push(params)
}
// 搜索店铺
const searchevent = (params:string) => {
  console.log(params,'搜索参数');
  //直接调接口返回
}
//搜索商品
const goodsse = (params:string) => {
  console.log(params,'搜索商品参数');
  //直接调接口返回
}
//搜索订单
const orderse = (params:string) => {
  console.log(params,'订单搜索参数');
  //直接调接口返回
}

</script>
