import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { 
    path:'/login',
    name:'login'
    beforeRouteEnter(to, from, next) {
      next((vm) => {});
    },
    beforeRouteUpdate(to, from, next) {
      // this.name = to.params.name;
      next();
    },
    beforeRouteLeave(to, from, next) {
      const answer = window.confirm(
        'Do you really want to leave? you have unsaved changes!'
      );
      if (answer) {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: '/',
    name: 'Home',
    component: Home

  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
