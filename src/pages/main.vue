<!-- 主页 -->
<template>
  <tableui></tableui>
</template>
<script lang="ts">
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { ref, reactive } from "vue"
import tableui from "../pages/tableCrund/index.vue"
export default {
  name: "main",
  components: { tableui },
  setup() {},
  onMounted() {},
}
</script>
