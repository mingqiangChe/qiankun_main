<!-- pinia介绍使用  -->
<template>
    <div>{{ userStore.name }}{{ counter }}</div>
    <button @click="changge">点击修改</button>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/user';
import { ref } from 'vue';
const userStore = useUserStore();
let counter = ref(0);
const changge = () => {
    userStore.updateName('里斯');
    counter.value++;
};
</script>
