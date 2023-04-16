<!-- 订单查看 -->
<template>
  <div class="container">
    <h1>订单查看</h1>
    <!-- 搜索订单 -->
    <div class="search">
      <searchs @searchevent="searchevent"></searchs>
      <el-button @click="orderSearch">订单搜索</el-button>
    </div>
    <!-- 订单展示 -->
    <div class="shops">
     <el-table
    ref="multipleTableRef"
    :data="orderList"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column label="Date" width="120">
      <template #default="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column property="shopId" label="商品id" width="120" />
    <el-table-column property="userId" label="用户id" width="120"/>
    <el-table-column property="shopNum" label="商品数量" width="120"/>
    <el-table-column property="address" label="用户地址" width="120"/>
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="removeSelect"
      >删除所选订单</el-button
    >
    <el-button @click="removeall">删除所有订单</el-button>
  </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// 从状态层导出指定模块
import { ElTable } from 'element-plus'
import searchs from "../../components/tableCrund/search.vue"
import { ref, reactive } from "vue"
import { ElMessage } from 'element-plus'
interface User {
  shopId: string
  userId: string
  shopNum: string
  address:string
}
const emit = defineEmits(['orderse'])
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])

const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
  console.log(multipleSelection,'删除所选数组');
}
  // 店铺搜索
  const searchValue=ref('')
  const searchevent = (value:string) => {
    console.log(value, '数据订单');
    searchValue.value=value
  }
const orderSearch = () => {
    emit('orderse',searchValue.value)
  }
//删除所选数据
const removeSelect = () => {
  console.log(multipleSelection.value,'勾选数据');
  ElMessage({
    showClose: true,
    message: `调取后端删除所有接口`,
    center: true,
  })
}
// 删除所有数据
const removeall = () => {
  //看后端有没有分页 调取接口
   ElMessage({
    showClose: true,
    message: '调取后端接口',
    center: true,
  })
}
// 订单数据
interface Props{
  orderList:object[]
}
defineProps<Props>()


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
    
  }
}

.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>

