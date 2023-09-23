<!-- https://developer.mozilla.org/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started-->
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App.."/>
  <TestX msg="QAQ,,0"/>
  <Test2X></Test2X>
</template>

<!--帮我引入 ./components/TestX.vue 到这个文件 -->

<script>
import HelloWorld from './components/HelloWorld.vue'
import TestX from './components/TestX.vue'
import Test2X from './components/Test2X.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TestX,
    Test2X
  }
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
