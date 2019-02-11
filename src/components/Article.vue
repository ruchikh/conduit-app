<template>
  <div>
    <div id="article-header"><h1>{{article.title}}</h1>
      <div class="user">
        <img :src="article.author.image">
        <span><a href="">{{article.author.username}}</a>
        <div>{{article.createdAt}}</div></span>
        <span><button>+Follow: ({{article.author.username}})</button></span>
        <span><button>Favorite Article: ({{article.favoritesCount}})</button></span>
      </div>
    </div>
    <div class="articel-desc">
      <p><span v-html="article.body"></span></p>
    </div>
    <hr>
    <div class="bottom">
      <div class="user_bottom">
        <img src="https://static.productionready.io/images/smiley-cyrus.jpg">
        <span><a href="" class="username">{{article.author.username}}</a>
        <div>{{article.createdAt}}</div></span>
        <span><button class="art_btn">+Follow: ({{article.author.username}})</button></span>
        <span><button class="art_btn">Favorite Article: ({{article.favoritesCount}})</button></span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Article',
  props: ['article'],
  data() {
    return{
      article: null
    }
  },
  mounted(){
    var target = this.$route.path.slice(8, this.$route.path.length);
    fetch(`https://conduit.productionready.io/api/articles${target}`)
    .then(res => res.json())
    .then(data => {
      this.article = data.article;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#article-header{
  background: #262626;
  color: white;
  padding: 20px 40px;
  font-size: 20px;
}
.user{
  display: flex;
  font-size: 15px;

}
.user_bottom{
  display: flex;
  place-content: center;
  margin-top: 3em;
}
img {
  height: 30px;
  border-radius: 50%;
  padding: 0 8px;
}
a{
  text-decoration-line: none;
  color: white
}
span{
  padding: 0 4px;

}
button{
  background: transparent;
  color: white;
  padding: 6px;
  border: 1px solid white;
  cursor: pointer;
}
button:hover{
  color: green;
  border: 1px solid green;
}
hr{
  width: 90%;
}
.articel-desc{
  padding: 50px 50px;
}

.username{
  color: green;
}
.art_btn{
  color: green;
  border: 1px solid green;
}
.bottom{
}
</style>
