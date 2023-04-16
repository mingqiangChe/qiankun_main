<!-- 店铺管理 -->
<template>
  <div class="container">
    <h1>店铺管理</h1>
    <!-- 搜索店铺 -->
    <div class="search">
      <searchs @searchevent="searchevent"></searchs>
      <el-button @click="shopsSearch">店铺搜索</el-button>
      <el-button class="btn" @click="addShops">添加店铺</el-button>
    </div>
    <!-- 店铺展示 -->
    <div class="shops">
      <div class="shop" v-for="item in shops">
      店铺名:{{ item.shopName }}<br/>
      地址:{{ item.location }}<br/>
      店铺等级:{{ item.rating }}
      </div>
    </div>
    <!-- 添加商品弹窗 -->
    <el-dialog
      v-model="centerDialogVisible"
      title="添加店铺"
      width="30%"
      center
    >
      <span>
        <el-form :model="form" label-width="120px">
          <el-form-item label="店铺名称">
            <el-input v-model="form.shopname" />
          </el-form-item>
      <el-form-item label="店铺id">
            <el-input v-model="form.shopId" />
          </el-form-item>
        <el-form-item label="店铺评级">
            <el-input v-model="form.rating" />
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="form.location" /> </el-form-item
        ></el-form>
      </span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="onSubmit">创建店铺</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
// 从状态层导出指定模块
import searchs from "../../components/tableCrund/search.vue"
import { ref, Ref, reactive } from "vue"

const centerDialogVisible = ref(false)
const form = reactive({
  shopname: "",
  location: "",
  shopId: '',
  rating: ''
})
interface Props{
  shops:object[]
}
defineProps<Props>()
const emit = defineEmits(['add-shops','search-event'])
const onSubmit = () => {
  console.log("submit!")
  if (form.shopname && form.location && form.shopId && form.rating) {
    centerDialogVisible.value = false
    // shops.value.push({shoopName: '北京', location: '北京', rating: '1级' })
    // 前端操作逻辑
    const obj=reactive({shopName:form.shopname,location:form.location,shopId:form.shopId,rating:form.rating})
    emit('add-shops',obj )

  // 这里提交成功需要手动更新数据
  } else {
    alert('不可添加，请填写所有')
  }
}
  // 添加店铺
  const addShops = () => {
    form.location = ''
    form.shopId = ''
    form.shopname = ''
    form.rating = ''
    centerDialogVisible.value = true
  }
  // 店铺搜索
  const searchValue=ref('')
  const searchevent = (value:string) => {
    console.log(value, '数据');
    searchValue.value=value
  }
const shopsSearch = () => {
    console.log(searchValue.value);
    // 查询表
    emit('search-event',searchValue.value)
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
  .shops{
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
