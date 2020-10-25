import Vue from 'vue'
import VueRouter from 'vue-router'
import film from "../views/film"
import hotShowing from "../views/film/hotShowing";
import cinema from "../views/cinema";
import shopDetail from "../views/shopDetail";
import shopTicket from "../views/shopTicket";
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
        path: "cinema",
        component: cinema
      },
      {
        path:"",
        redirect:"hotShowing"
      }
    ]
  },
  {
        path:"/shopDetail/:id",
        component:shopDetail
  },
    
  {
        path:"/shopTicket/:movieID/:cinemaID",
        component:shopTicket
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
