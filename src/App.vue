<template>
  <div>
    <router-link to="/discover">发现音乐</router-link>
    <router-link to="/my"> 我的音乐</router-link>
    <router-link to="/friends"> 关注</router-link>
    <router-view></router-view>

    <img alt="Vue logo" src="./assets/logo.png">
    <TestX msg="QAQ,,0"/>
    <Test2X></Test2X>
    <TextAreaTest></TextAreaTest>
    <ProgressBar></ProgressBar>
    <ul>
      <li v-for="(user,index) in userList" :key="user.id">
        <input type="checkbox"/>
        索引是:{{ index }}, 姓名是:{{ user.name }}
      </li>
    </ul>
  </div>
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
    ProgressBar,
  },
  created: function () {
    this.$axios.get("/userapi/AllUser").then(response => {
      console.log(response)
      console.log(response.data)
      this.userList = response.data
    })
    console.log("created")
  },
  mounted: function () {
    console.log("mounted") //渲染
  },
  data: function () {
    return {
      userList: []
    }
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
