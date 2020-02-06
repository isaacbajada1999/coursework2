<template>
  <div id="app">

    <userComponent />
    <postComponent />

  </div>
</template>

<script>
  import PostComponent from './components/postComponent.vue'
  import UserComponent from './components/userComponent.vue'


  export default {
    name: 'app',
    components: {
      PostComponent,
      UserComponent
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
