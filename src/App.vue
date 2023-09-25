<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <TestX msg="QAQ,,0"/>
  <Test2X></Test2X>
  <TextAreaTest></TextAreaTest>
  <ProgressBar></ProgressBar>
</template>

<script>
import TestX from './components/TestX.vue'
import Test2X from './components/Test2X.vue'
import TextAreaTest from './components/TextAreaTest.vue'
import ProgressBar from './components/ProgressBar.vue'

export default {
  name: 'App',
  components: {
    TestX,
    Test2X,
    TextAreaTest,
    ProgressBar
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
