<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-11-24 14:29:18
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-11-24 14:38:21
-->
<!--  -->
<template>
  <div class='b3d' style="height:980px;">
    <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%">
      <defs>
        <radialGradient id="gradient-squ530vsa" gradientTransform="rotate(51)">
          <stop offset="0%" stop-color="rgb(40,29,114)"></stop>
          <stop offset="100%" stop-color="rgb(15,26,41)"></stop>
        </radialGradient>
        <filter id="filter-squ530vsa">
          <feTurbulence baseFrequency="0.04118 0.02027" numOctaves="1" seed="975"></feTurbulence>
          <feColorMatrix class="anim" type="hueRotate" values="0">
            <animate attributeName="values" from="0" to="360" dur="3s" repeatCount="indefinite"></animate>
          </feColorMatrix>
          <feColorMatrix values="2.8 1.3 -4.6 -0.8 -4.5 -4 -4.1 -0.2 -4.6 4.8 -3.8 -1.3 4.4 -2 -2.5 -4 0.1 4.1 -4.8 2.5">
          </feColorMatrix>
          <feSpecularLighting result="specOut" specularExponent="34" lighting-color="rgb(240,229,214)">
            <fePointLight x="528" y="232" z="8"></fePointLight>
          </feSpecularLighting>
        </filter>
      </defs>
      <rect width="100%" height="100%" fill="url(#gradient-squ530vsa)" class="bgRect"></rect>
      <rect width="100%" height="100%" filter="url(#filter-squ530vsa)"></rect>
    </svg>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
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
<style lang='css' scoped>
</style>