
//Uptime calculator webapp by Mathias Are

//Home assignment for CGI 2021 Tartu Internship program canditature


//Vue 2 entry point

import Vue from 'vue'
import App from './App.vue'
import 'leaflet/dist/leaflet.css';
import store from './store'
import router from './router'



//Init Vuex store, Vue Router and App component
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
