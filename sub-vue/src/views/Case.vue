<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-11-16 16:22:15
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-11-24 15:02:08
-->
<!-- 案例 -->
<template>
  <div class='case'>
    <b3d>
    </b3d>
    <div class="loading">
      <loading></loading>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import b3d from '../components/utils/Background3D.vue'
import loading from '../components/utils/Loading.vue'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { b3d, loading },
  data() {
    //这里存放数据
    return {}
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
.loading {
  position: fixed;
  right: 15%;
  bottom: 20%;
}
</style>