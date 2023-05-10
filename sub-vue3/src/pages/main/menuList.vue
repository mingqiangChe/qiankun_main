<!-- 首页文章目录 -->
<template>
    <div class="menu_home">
        <el-card class="main">
            <div class="catalogue">
                <img src="@/assets/list.png" alt="" />
                序列
            </div>
            <div class="main-one" @click="pushMyself">
                <img src="@/assets/me.png" alt="" />
                个人介绍
            </div>
            <div class="main-two" @click="pushDatav">
                <img src="@/assets/datav.png" /> 大数据展示平台
            </div>
            <div class="main-three">
                <img src="@/assets/admin_manage.png" alt="" />
                后台管理
            </div>
            <div class="main-four">
                <img src="@/assets/blog.png" /> 个人技术博客
            </div>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const pushDatav = () => {
    router.push('/datav');
};
const pushMyself = () => {
    router.push('/mySelf');
};
</script>
<style lang="scss">
.el-card__body {
    padding: 0px !important;
}
.menu_home {
    width: 100vw;
    display: inline-block;
    text-align: center;
    .main {
        z-index: 88;
        position: relative;
        width: 306px;
        display: flex;
        // flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        border-radius: 8px;
        animation: icon 4s linear infinite;
        box-shadow: 2px 2px 10px #909090;
        overflow: hidden;
        .catalogue {
            width: 306px;
            box-sizing: border-box;
            padding: 5px 0 5px 8px;
            font-size: 34px;
            color: #fff;
            font-weight: bolder;
            text-align: left;
            background-color: #040101;
            display: flex;
            align-items: center;
            font-weight: 400;
            img {
                padding-top: 10px;
                box-sizing: border-box;
                padding-right: 10px;
            }
        }
        .main-one,
        .main-two,
        .main-three,
        .main-four,
        .main-five {
            width: 306px;
            font-size: 22px;
            text-align: left;
            padding: 8px 0 8px 8px;
            box-sizing: border-box;
            cursor: pointer;
            display: flex;
            align-items: center;
        }
        .main-one:hover,
        .main-two:hover,
        .main-three:hover,
        .main-four:hover,
        .main-five:hover {
            background-color: blue;
            color: chartreuse;
        }
        @keyframes icon {
            0% {
                transform: translate(0, 0);
            }
            50% {
                transform: translate(0px, 30px);
            }
            100% {
                transform: translate(0, 0);
            }
        }
    }
}
</style>
