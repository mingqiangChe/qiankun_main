<!-- 主页 -->
<template>
  <div class="contain">
    <h1>后台管理</h1>
    <div class="main">
      <div class="left">
        <asides @change-menu="handlSelect"></asides>
      </div>
      <div class="right">
        <tabless :asideIndex="activeIndex"></tabless>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import asides from "../../components/tableCrund/aside.vue"
import tabless from "../../components/tableCrund/table.vue"
import { ref } from 'vue'
const activeIndex=ref('1-1')
const handlSelect = (asideIndex: string) => {
  activeIndex.value=asideIndex
  console.log(activeIndex.value,'wo丢丢低');
  
}
</script>
<style lang="scss" scoped>
.contain {
  height: 800px;
  width: 1200px;
  background-color: #fff;
  h1 {
    font-size: 24px;
  }
  .main {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    .left {
      background-color: black;
    }
    .right {
      flex: 1;
    }
  }
}
</style>
