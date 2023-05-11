<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-11-24 14:59:26
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-11-24 15:04:04
-->
<!-- loading -->
<template>
  <section class="container">
    <div class="ring-frame">
    </div>
    <div class="disc-frame">
    </div>
    <section class="loading">LOADING...</section>
  </section>
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
  methods: {
    
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    
  },
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
.container {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

body,
.container {
  position: relative;
}

.ring-frame,
.disc-frame {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ring-frame,
.disc-frame,
.ring,
.disc {
  position: absolute;
}

.ring {
  border: 2px solid rgba(255, 35, 49, 0.1);
  border-left: 2px solid var(--red);
  border-right: 2px solid var(--red);
  border-radius: 50%;
  display: flex;
  z-index: 1;
}

.ring:nth-child(1) {
  animation: spin 1s linear infinite;
}

.ring:nth-child(2) {
  animation: spinner 1.25s linear infinite;
}

.ring:nth-child(3) {
  animation: spin 1.5s linear infinite;
}

.disc {
  height: var(--size);
  width: var(--size);
  border: 2px solid var(--red);
  opacity: 0.9;
  border-radius: 50%;
  animation: rotate 3s linear infinite;
}

.loading {
  display: block;
  font-family: NTF Grand, sans-serif;
  font-size: 1.5rem;
  letter-spacing: 0.25rem;
  color: var(--red);
  animation: blink 1s ease infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}

@keyframes rotate {
  100% {
    transform: rotate3D(0.5, 0.5, 0.5, -720deg);
  }
}

@keyframes spin {
  to {
    transform: rotateZ(-360deg);
  }
}

@keyframes spinner {
  to {
    transform: rotateZ(360deg);
  }
}
</style>