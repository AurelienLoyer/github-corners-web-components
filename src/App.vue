<template>
    <GithubCorners href="https://github.com/T3kstiil3" side="right" color="white" fill="black"/>
</template>

<script>
import GithubCorners from './components/GithubCorners.vue'

export default {
  name: 'app',
  components: {
    GithubCorners
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
