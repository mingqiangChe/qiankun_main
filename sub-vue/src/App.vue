<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom right, #000, #000);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
}
* {
  margin: 0;
  padding: 0;
}
</style>
