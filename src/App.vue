<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Router from 'vue-router'
  Vue.use(Router);
  import Home from './views/Home'


  export default {
    name: 'App',
    components: {
      Home
    },
    data(){
      return {
        jwt: ""
      }
    },
    mounted(){
      this.jwt = JSON.parse(localStorage.getItem('jwt'))
      console.log(this.jwt)
    },
    methods: {
      logout(){
        localStorage.removeItem("jwt");
        this.jwt = ''
        this.$router.push({ path:'/signin' });
      }
    }
  }


</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
