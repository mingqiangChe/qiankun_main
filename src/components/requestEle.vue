<script setup lang="ts">
import api from '@/api/insex';
console.log(import.meta.env.VITE_APP_WEB_URL, '打印环境');
const requestRes = async () => {
    let result = await api.login('zhangsan', '123456');
    console.log(result, '请求结果');
};
</script>
<template>
    <!-- 发送请求 -->
    <button @click="requestRes">发送请求</button>
</template>
