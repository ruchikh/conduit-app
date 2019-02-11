import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Article from './components/Article.vue'
import Tags from './components/Tags.vue'
import Profile from './components/Profile.vue'
import SignUp from './components/SignUp.vue'
import SignIn from './components/SignIn.vue'
import NewArticle from './components/NewArticle.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/article/:slug',
      name: 'article',
      component: Article
    },
    {
      path: '/@:username',
      name: 'username',
      component: Profile
    },
    {
      path: '/tag/:tags',
      name: 'tags',
      component: Tags
    },
     {
      path: '/register',
      name: 'register',
      component: SignUp
    },
     {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
     {
      path: '/editor',
      name: 'editor',
      component: NewArticle
    }
  ]
})
