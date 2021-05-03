import VueRouter from "vue-router";
import Vue from "vue"
import Home from "../views/Home"
import GraphPage from "../views/GraphPage"

Vue.use(VueRouter)

//Vue Router

//Mapping of app routes
const routes = [
    {
        path:"/",
        name:"Home",
        component:Home
    },
    {
        path:"/graphs",
        name:"GraphsPage",
        component:GraphPage
    }
]

//Export routes, history enables to go back to previous page.
export default new VueRouter({
    mode:'history',
    routes:routes
  })
