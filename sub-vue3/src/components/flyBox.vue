<!-- 小飞机 -->
<template>
    <div class="fly">
        <div class="flyBox">
            <div class="helicopter">
                <div class="cockpit"></div>
                <div class="tail"></div>
                <div class="main"></div>
                <div class="rotor">
                    <div class="rotator">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.flyBox {
    position: fixed;
    right: 15%;
    bottom: 20%;
    z-index: 108;
    // transform: translate(-50%, -50%);
}

.cockpit {
    position: absolute;
    overflow: hidden;
    z-index: 1;
    width: 62px;
    height: 62px;
    border-radius: 114px 14px 34px 20px;
    background-color: #44d2fd;
}

.cockpit::before {
    content: '';
    position: absolute;
    z-index: 1;
    top: -10px;
    left: -14px;
    width: 56px;
    height: 56px;
    border-radius: 18px;
    /* background-color: #302e37; */
    background-color: #00cd00;
}

.cockpit::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: -60px;
    left: -60px;
    width: 100px;
    height: 100px;
    border-radius: 20px;
    /* background-color: rgba(255, 255, 255, 0.05); */
    background-color: rgba(25, 25, 55, 1);
}

.tail {
    position: absolute;
    top: 12px;
    left: 60px;
    transform-origin: left center;
    border-top: 1px solid transparent;
    border-bottom: 16px solid transparent;
    border-left: 84px solid #2fadd2;
    border-bottom-right-radius: 60px;
    height: 12px;
}

/* 这个类是直升机的旋转体： */
.main {
    position: absolute;
    left: 34px;
    top: -4px;
    width: 16px;
    height: 8px;
    background: #302e37;
}

.rotor {
    width: 262px;
    height: 434px;
    border-radius: 350px;
    position: absolute;
    top: -230px;
    left: -86px;
    z-index: 2;
    overflow: hidden;
    background-color: #00cd00;
    opacity: 0.12;
    transform: scaleY(0.075);
}

.rotator div {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -350px;
    margin-top: -30px;
    width: 700px;
    height: 80px;
    background-color: #fff;
}

.rotator div:nth-child(1) {
    transform: rotate(0deg);
}

.rotor div:nth-child(2) {
    transform: rotate(90deg);
}

@keyframes bounce {
    0%,
    100% {
        transform: translate(0px, -50px) rotate(-15deg);
    }

    50% {
        transform: translate(0px, 50px) rotate(-10deg);
    }
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.helicopter {
    /* adding bounce keyframes with duration 5s and infinite loop */
    animation: bounce 5s infinite;
}

.rotator {
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 366px;
    animation: rotate 0.6s linear infinite;
}
</style>
