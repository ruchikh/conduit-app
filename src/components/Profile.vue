<template>
  <div>
    <div id="profile-header">
      <img src="https://static.productionready.io/images/smiley-cyrus.jpg">
      <h2>{{this.$route.params.username}}<button class="user-btn">+Follow {{this.$route.params.username}}</button></h2>
    </div>
    <div class="user-article">
      <h4>My Articles</h4>
      <div v-for="user in userData" class="">
        <hr>
        <div class="user-detail">
          <img class="user-img"src="https://static.productionready.io/images/smiley-cyrus.jpg">
          <span>{{user.author.username}}</span>
          <div>{{user.createdAt}}</div>
          <h3>{{user.title}}</h3>
          <p>{{user.body}}</p>
          <button class="icon"><i class="far fa-heart"></i></button>
        </div>
        <hr>
      </div>
    </div>  
  </div>
</template>

<script>

export default {
  name: 'Profile',
  props: ['profile'],
  data() {
    return{
      profile: null,
      user: this.$route.params.username,
      userData: null
    }
  },
  mounted(){
    fetch('https://conduit.productionready.io/api/articles')
    .then(res => res.json())
    .then(data => {
      this.profile = data.articles,
      this.userData = data.articles.filter(v => v.author.username === this.user)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  height: 6em;
  border-radius: 50%;
  padding: 0 8px;
}
span, h4{
  color: green
}
.icon{
  /*position: absolute;
  top: 60%;
  right: 20%;*/
  size: 30px;
  color: green;
  padding: 5px 10px;
}

#profile-header{
  background: #f4f5f7;
  text-align: center;
  padding: 35px 0px;
}
.user-btn{
  position: absolute;
  /*top: 2em;*/
  right: 7em;
  background: white;
  border: none;
  padding: 
  10px;
  border: 1px solid grey;
  color: grey;
  cursor: pointer;
}
.user-img {
  height: 30px;
  border-radius: 50%;
}
.user-article{
  max-width: 1100px;
  width: 60%;
  margin: 0 auto;
  margin-top: 3em;
}
.user-detail{
  padding: 20px;
}
</style>
