<script setup lang="ts">
    import api from '@/api/insex';
import { reactify } from '@vueuse/shared';
    const requestRes = async () => {
      let result = await api.login('zhangsan', '123456');
      console.log(result,'请求结果');
    }
</script>
<template>
  <!-- 发送请求 -->
  <button @click="requestRes">发送请求</button>
</template>
