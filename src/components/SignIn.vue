<template>
  <div>
  <Header />

  <div class="user-login">
    <form @submit.prevent="login">
    <h1>Sign In</h1>
    <a href="">Need an Acount?</a>
      <input type="text" name="email" placeholder="Enter Email" v-model="email" />
      <input type="password" name="password" placeholder="Enter password" v-model="password" />
   
      <button class="btn-signup">Sign In</button>
    </form>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
import Header from './Header';

export default {
  name: "SignIn",
  components: {
    Header
  },
  data(){
    return {
      email: '',
      password: '',
      userData: null,
      jwt: ''
    }
  },
  mounted(){
    this.jwt = JSON.parse(localStorage.getItem('jwt'))
        if(this.jwt){
        this.$router.push({ path:'/' });
      }
    },
  methods: {
    login(){
      fetch("https://conduit.productionready.io/api/users/login", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
          email: this.email,
          password: this.password
            
        }
        })
      })
      .then(res => res.json())
      .then(data => {
        if(data.user) {
        this.userData = data.user;
        localStorage.setItem("jwt", JSON.stringify(data.user.token));
       this.$router.push({ path:'/' });
          
        }
      })

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input{
  padding: 10px 0px;
  display: block;
  margin: 10px 0;
  width: 100%;
}
.user-login{
  max-width: 1100px;
  width: 30%;
  margin: 0 auto;
}
a{
  text-decoration: none;
  color: #00cc66;
}

.btn-signup{
  background: #00cc66;
  outline: none;
  border: none;
  padding: 10px 25px;
  border-radius: 5px;
  color: white;
  font-size: 20px;

}

</style>
