<template>
  <div class="home">
    <div class='homeheader' :style="conTop">
      <!-- <img src="@/assets/header.jpg" alt=""> -->
      <div class="box">
        <div class="headerdivv"></div>
        <template>
          <div class="headerdiv" @click="handleClick='Index'">首页</div>
          <div class="headerdiv" @click="handleClick='Article'">文章</div>
          <div class="headerdiv" @click="handleClick='Case'">案例</div>
          <div class="headerdiv" @click="handleClick='Contact'">联系</div>
          <div class="headerdiv" @click="handleClick='Article'">日记</div>
        </template>
      </div>
    </div>
    <keep-alive include="Article,Case,Contact,Article">
      <div :is="handleClick"></div>
    </keep-alive>
  </div>
</template>

<script>
// @ is an alias to /src
import Index from '@/components/home/HomeIndex.vue'
import Article from '@/components/article/Article.vue'
import Case from '@/components/Case/Case.vue'
import Contact from '@/components/contact/Contact.vue'
export default {
  name: 'Home',
  components: {
    Index,
    Article,
    Case,
    Contact
  },
  data() {
    return {
      handleClick: Index,
      conTop: {
        backgroundImage: 'url(' + require('../assets/header.jpg') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }
    }
  }
}
</script>
<style lang="less" scope>
.homeheader {
  // height: 500px;
  padding-right: 40px;
  .box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .headerdivv {
      min-width: 200px;
      width: 300px;
    }
    .headerdiv {
      width: 100px;
      min-width: 50px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
}
</style>