<template>
  <div>
    <Header />
    <div class="user-signup">
      <form method="post" @submit.prevent="handleSubmit">
        <input type="text" name="text" placeholder="Article title" v-model="article"/><br>
        <input type="text" name="text" placeholder="Whats this article about?" v-model="about"/><br>
        <textarea type="text" cols="15" rows="15" placeholder="Write your article(in markdown)" v-model="textarea"></textarea><br>
        <input type="text" name="text" placeholder="Enter tags" v-model="tags"/><br>
        <button class="btn-signup">Publish Article</button>
      </form>
    </div>
  </div>
</template>

<script>
import Header from './Header';

export default {
  name: "NewArticle",
  components:{
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .user-signup{
    max-width: 1100px;
    width: 70%;
    margin: 10px auto;
  }
  input, textarea{
    width: 100%;
    padding: 10px 25px;
    margin-top: 20px;
  }

  .btn-signup{
    background: green;
    color: white;
    padding: 15px 30px;
    margin-top: 5px;
    float: right;
  }

</style>
