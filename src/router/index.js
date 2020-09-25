import Vue from 'vue'
import VueRouter from 'vue-router'
import film from "../views/film"
import hotShowing from "../views/film/hotShowing";
Vue.use(VueRouter)

const routes = [
  {
    path: "/film",
    component: film,
    children:[
      {
        path: "hotShowing",
        component: hotShowing,
      },
      {
        path:"",
        redirect:"hotShowing"
      }
    ]
  },
  {
    path:"",
    redirect: "/film"
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
