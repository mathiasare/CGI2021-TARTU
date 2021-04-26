import VueRouter from "vue-router";
import Vue from "vue"
import Home from "../views/Home"
import Graphs from "../views/Graphs"

Vue.use(VueRouter)

const routes = [
    {
        path:"/",
        name:"Home",
        component:Home
    },
    {
        path:"/graphs",
        name:"Graphs",
        component:Graphs
    }
]

export default new VueRouter({
    mode:'history',
    routes:routes
  })
