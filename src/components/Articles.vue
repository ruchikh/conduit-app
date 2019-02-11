<template>
  <div> 
  <div class="hello">
    <h1 class="text">Conduit</h1>
    <h5>A place to share your knowledge.</h5>
  </div>
    <div id="articles" v-if="articleInfo">
      <h4>Global Feed</h4>
      <div v-for="article in articleInfo" >
        <hr>
          <div class="user">
            <router-link :to="{name:'username', params:{username: article.author.username}}">
            <img :src="article.author.image">
            <span class="username">{{article.author.username}}</span>
              <div>{{article.createdAt}}</div></router-link>
          </div>
            <h2><router-link :to="{name: 'article', params: {slug: article.slug}}">{{article.title}}</router-link></h2>
            <p>{{article.description}}</p></a>
            <button class="icon"><i class="far fa-heart"></i></button>
        <hr>
      </div>
      <div class="tags">
        <h4>Papular Tag</h4>

        <div v-for="tag in tags" class="tag-btn"><router-link :to="{name:'tags', params: {tags: tag}}"><button class="btn" v-on:click="tagDetails(tag)">{{tag}}</button></router-link>
        </div>
      </div>
    </div>
    <div v-else><Loader /></div>
  </div>
</template>

<script>

import Loader from './Loader.vue'
import Article from './Article.vue';
import Profile from './Profile.vue';


export default {
  name: 'Articles',
  components: {
    Loader,
    Article,
    Profile
  },
  data() {
    return {     
    tags: null,
    uniqueTags: null,
    articleInfo: null
    }
  },
  mounted () {
    fetch('https://conduit.productionready.io/api/articles').then(res => res.json()).then(data => {
      this.articleInfo = data.articles
    });
    fetch('https://conduit.productionready.io/api/tags').then(res => res.json()).then(data => {this.tags = data.tags})
  },
  methods: {
    tagDetails(tag){
      var filterArticles = this.articleInfo.filter(v => v.tagList.includes(tag))
      this.uniqueTags = filterArticles;
    }
  }
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  height: 30px;
  width: 30px;
  border-radius: 50%;
}
#articles{
  max-width: 1100px;
  width: 70%;
  padding: 40px;
}
.user{
  display: flex;
  margin-left: 5px;
  font-size: 15px;
}
.username {
  margin-top: 0;
}
span{
  font-size: 15px;
  /*margin-top: 5px;*/
  /*padding: 0px 10px;*/
  color: #7bd185;
  padding: 4px;
}

.btn{
  border-radius: 7px;
  padding: 5px;
  border: none;
  background: grey;
  color: white;
  cursor: pointer;
  outline: none;
}

.tags{
  float: right;
  position: absolute;
  top: 37%;
  right: 4%;
  width: 20%;
  background: #f2f3f4;
  padding: 10PX;
}

.tag-btn{
  display: inline-block;
  padding: 3px;
}

a {
  text-decoration: none;
  color: #22262b; 
}
.hello{
  background: #1fad55;
  text-align: center;
  padding: 5px;
  color: white;
  font-size: 20px;
}


</style>
