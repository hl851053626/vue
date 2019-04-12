<template>
  <div id="app">
		<router-view></router-view>
  </div>
</template>

<script>
import home from './pages/home/home'
import register from './pages/register/register'

export default {
  name: 'app',
  components: {
    home,
    register
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
