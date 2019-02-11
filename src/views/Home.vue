<template>
	<div id="home">
		<App />
	  <div class="home">
	    <Header class="header" msg="Conduit"/>
	  </div>
	  <div class="data-articles">
	    <Articles text="articel"/>
	  </div>
	</div>
	</div>
</template>

<script>
// @ is an alias to /src
import App from '../App.vue'
import Header from '@/components/Header.vue'
import Articles from '@/components/Articles.vue'


export default {
  name: 'home',
  components: {
  	App,
    Header,
    Articles
  }
}
</script>


<style scoped>
	.header{
		font-size: 20px;
		color: white;

	}
	.home{
		/*background: #1fad55;*/
		text-align: center;
		padding: 5px;
	}

</style>
