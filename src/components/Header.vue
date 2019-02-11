<template>
  <div class="header">
   <div id="nav">
    <router-link class="conduit" to="/">Conduit</router-link> 
    <div class="nav-item">
      <router-link to="/">Home</router-link>
      <div v-if="!jwt">
      <router-link to="/SignIn"><i class="fas fa-sign-in-alt"></i>SignIn</router-link>
      <router-link to="/register"><i class="fas fa-sign-out-alt"></i>SignUp</router-link>
    </div>
    <div v-else>
      <button @click="logout">logout</button>
      <router-link to="/editor">New Article</router-link>
    </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text{
  /*box-shadow: 5px 10px 5px 5px #fff;*/
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.header{
  font-size: 20px;
  color: white;

}
.hello{
  background: #1fad55;
  text-align: center;
  padding: 5px;
  color: white;
  font-size: 20px;
}

#nav {
  display: flex;
  justify-content: space-between;
  background: white;
  padding: 20px;
  color: #42b983;
}

#nav .conduit {
  font-size: 20px;
  font-weight: bold;
  text-decoration-line: none;
  color: #42b983;
}
#nav a, a.router-link-exact-active {
  text-decoration-line: none;
  color: grey;
  font-size: 15px;
}
router-link-exact-active:hover {
  color: black
}
.nav-item{
  display: flex;
}
.header{
  box-shadow: 0 0 7px .5px #bdc0c8;
}

</style>
