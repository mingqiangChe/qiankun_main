<!-- 物品管理侧边栏 -->
<template>
  <div style="width: 300px; height: 600px">
    <el-row class="tac">
      <el-col :span="24" style="height: 600px">
        <el-menu
          :default-active="asideIndex"
          active-text-color="#ffd04b"
          background-color="black"
          class="el-menu-vertical-demo"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
        >
          <el-sub-menu index="1">
            <template #title>后台管理</template>
            <el-menu-item index="1-1">店铺管理</el-menu-item>
            <el-menu-item index="1-2">商品管理</el-menu-item>
            <el-menu-item index="1-3">订单查看</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const asideIndex =ref('1-1')
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const emit = defineEmits(['change-menu'])
const handleSelect = (key: string) => {
  console.log(key, "选中下标")
  emit('change-menu', key)
}
</script>
<style scoped lang="scss"></style>
