<template>
	<div>
		<Header />
		<div class="hello">
			<h1 class="text">Conduit</h1>
			<h5>A place to share your knowledge.</h5>
		</div>
		<div id="articles" v-if="uniqueTags">
			<h2># {{ $route.params.tags }}</h2>
			<div v-for="tag in uniqueTags">
				<hr />
				<img :src="tag.author.image" />
				<span
					><a href="" class="username">{{ tag.author.username }}</a>
					<div>{{ tag.createdAt }}</div></span
				>
				<h3>{{ tag.title }}</h3>
				<p>{{ tag.description }}</p>
				<hr />
			</div>
			<div class="tags">
				<h4>Papular Tag</h4>
				<div v-for="tag in tags" class="tag-btn">
					<router-link :to="{ name: 'tags', params: { tags: tag } }"
						><button class="btn" v-on:click="tagDetails(tag)">
							{{ tag }}
						</button></router-link
					>
				</div>
			</div>
		</div>
		<div v-else><Loader /></div>
	</div>
</template>

<script>
import Loader from "./Loader.vue";
import Header from "./Header.vue";

export default {
	name: "Articles",
	components: {
		Loader,
		Header
	},
	data() {
		return {
			tags: null,
			uniqueTags: null,
			articleInfo: null
		};
	},
	mounted() {
		this.tagDetails(this.$route.params.tags);
		fetch("https://conduit.productionready.io/api/tags")
			.then(res => res.json())
			.then(data => {
				this.tags = data.tags;
			});
	},
	methods: {
		tagDetails(tag) {
			fetch(`https://conduit.productionready.io/api/articles?tag=${tag}`)
				.then(res => res.json())
				.then(data => (this.uniqueTags = data.articles));
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
	height: 30px;
	width: 30px;
	border-radius: 50%;
}
#articles {
	max-width: 1100px;
	width: 70%;
	padding: 40px;
}
.user {
	display: flex;
	margin-left: 5px;
	font-size: 15px;
}
a {
	text-decoration: none;
	color: white;
}
span {
	padding: 0 4px;
}
.username {
	color: green;
}
span {
	font-size: 15px;
	padding: 4px;
}

.btn {
	border-radius: 7px;
	padding: 5px;
	border: none;
	background: grey;
	color: white;
	cursor: pointer;
	outline: none;
}

.tags {
	float: right;
	position: absolute;
	top: 37%;
	right: 4%;
	width: 20%;
	background: #f2f3f4;
	padding: 10px;
}

.tag-btn {
	display: inline-block;
	padding: 3px;
}
.hello{
  background: #1fad55;
  text-align: center;
  padding: 5px;
  color: white;
  font-size: 20px;
}
</style>
