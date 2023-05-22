<!-- 商品管理 -->
<template>
  <div class="container">
    <h1>商品管理</h1>
    <!-- 搜索商品 -->
    <div class="search">
      <searchs @searchevent="goodsevent"></searchs>
      <el-button @click="goodsSearch">商品搜索</el-button>
      <el-button class="btn" @click="addGoods">添加商品</el-button>
    </div>
    <!-- 店铺展示 -->
    <div class="goods">
      <div class="shop" v-for="item in goods">
        <!-- 商品id:{{ item.shopId }} -->
      <!-- 商品名:{{ item.shoopName }}<br/> -->
      <!-- 价格:{{ item.price }}<br/> -->
      <el-button @click="buy(item)">购买</el-button>
      </div>
    </div>
    <!-- 添加商品弹窗 -->
    <el-dialog
      v-model="centerDialogVisible"
      title="添加商品"
      width="30%"
      center
    >
      <span>
        <el-form :model="form" label-width="120px">
          <el-form-item label="商品名称">
            <el-input v-model="form.shopname" />
          </el-form-item>
      <el-form-item label="商品id">
            <el-input v-model="form.shopId" />
          </el-form-item>
        <el-form-item label="商品价格">
            <el-input v-model="form.price" />
          </el-form-item>
      </el-form>
      </span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="onSubmit">添加商品</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
// 从状态层导出指定模块
import searchs from "../../components/tableCrund/search.vue"
import { ref, reactive } from "vue"

const emit = defineEmits(['goodsse','add-goods'])
const centerDialogVisible = ref(false)
const form = reactive({
  shopname: "",
  shopId: '',
  price: ''
})
interface Props{
  goods:object[]
}
defineProps<Props>()
//添加商品s
const addGoods = () => {
  form.shopname = ''
  form.shopId = ''
  form.price=''
  centerDialogVisible.value = true
}
const onSubmit = () => {
  console.log("submit!")
  if(form.shopname &&form.shopId &&form.price) {
    // centerDialogVisible.value = false
    //   const obj=reactive({shopName:form.shopname,location:form.location,price:form.price})
    // emit('add-goods',obj )

  // 这里提交成功需要手动更新数据
  } else {
    alert('不可添加，请填写所有')
  }
}
const buy = (v:object) => {
  console.log(v,'购买商品信息');
}
  // 商品搜索
const searchValue = ref('')
const goodsevent = (value:string) => {
    console.log(value, '数据订单');
    searchValue.value=value
  }  
//商品搜索
const goodsSearch = () => {
  emit('goodsse',searchValue.value)
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .search {
    display: flex;
    width: 600px;
    align-items: center;
    .btn {
      margin-left: 60px;
    }
  }
  .goods{
    margin-top: 20px;
    width: 600px;
    display: flex;
    flex-wrap: wrap;
    height: 600px;
    overflow-y: scroll;
    .shop{
      width: 200px;
      height: 200px;
      border: 1px solid black;
      margin:  10px;
    }
  }
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>

