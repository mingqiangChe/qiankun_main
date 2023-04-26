import { ref } from 'vue';
<template>
    <div class="rain" translate="no">
        <div class="background-container">
            <img src="@/assets/bg/moon2.png" alt="" />
            <div class="stars"></div>
            <div class="twinkling"></div>
            <div class="clouds"></div>
        </div>
    </div>
    <div class="list">
        <list></list>
    </div>
</template>
<script lang="ts" setup>
import list from './main/menuList.vue';
</script>
<style lang="scss" scoped>
canvas {
    background-color: rgba(255, 0, 0, 0.1);
}
.rain {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 82;
    overflow: hidden;
}
@keyframes move-background {
    from {
        -webkit-transform: translate3d(0px, 0px, 0px);
    }
    to {
        -webkit-transform: translate3d(1000px, 0px, 0px);
    }
}
@-webkit-keyframes move-background {
    from {
        -webkit-transform: translate3d(0px, 0px, 0px);
    }
    to {
        -webkit-transform: translate3d(1000px, 0px, 0px);
    }
}
@-moz-keyframes move-background {
    from {
        -webkit-transform: translate3d(0px, 0px, 0px);
    }
    to {
        -webkit-transform: translate3d(1000px, 0px, 0px);
    }
}
@-webkit-keyframes move-background {
    from {
        -webkit-transform: translate3d(0px, 0px, 0px);
    }
    to {
        -webkit-transform: translate3d(1000px, 0px, 0px);
    }
}
.background-container {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

.stars {
    background: black url('@/assets/bg/stars.png') repeat;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    z-index: 0;
}

.twinkling {
    width: 10000px;
    height: 100%;
    background: transparent url('@/assets/bg/twinkling.png') repeat;
    background-size: 1000px 1000px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    -moz-animation: move-background 30s linear infinite;
    -ms-animation: move-background 30s linear infinite;
    -o-animation: move-background 30s linear infinite;
    -webkit-animation: move-background 30s linear infinite;
    animation: move-background 30s linear infinite;
}

.clouds {
    width: 10000px;
    height: 100%;
    background: transparent url('@/assets/bg/clouds_repeat.png') repeat;
    background-size: 1000px 1000px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 3;
    -moz-animation: move-background 10s linear infinite;
    -ms-animation: move-background 10s linear infinite;
    -o-animation: move-background 10s linear infinite;
    -webkit-animation: move-background 10s linear infinite;
    animation: move-background 10s linear infinite;
}

img {
    height: 70vh;
    width: 70vh;
    position: absolute;
    z-index: 3;
    right: 20px;
}
</style>
