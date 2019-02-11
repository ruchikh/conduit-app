<template>
  <div>
    <Header />
    <div class="user-signup">
      <form action="/register" method="post" @submit.prevent="handleSubmit">
      <h1>SignUp</h1>
      <a href="">Have an account?</a>
      <input type="text" name="username" placeholder="Enter Name" v-model="username"/>
        <input type="text" name="email" placeholder="Enter Email" v-model="email"/>
        <input type="password" name="password" placeholder="Enter password" v-model="password"/>
        <button class="btn-signup">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script>
import Header from './Header'
export default {
  name: "SignUp",
  components: {
    Header
  },
  data(){
    return {
      username: "",
      email: "",
      password: "",
      userData: null
    }
  },
  methods: {
    handleSubmit(){

      fetch("https://conduit.productionready.io/api/users", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
          username: this.username,
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
.user-signup{
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
