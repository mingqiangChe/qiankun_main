<!-- 搜索组件 -->
<template>
    <el-input
      v-model="value"
      class="w-50 m-2"
      placeholder="输入搜索"
      :suffix-icon="Search"
      @input="searchevent"
    />
</template>
<script lang="ts" setup>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue'
const value =ref('')
const emit = defineEmits(['searchevent'])
const searchevent = (value:string | number) => {
  if (value) {
    emit('searchevent',value)
  }
}
</script>
