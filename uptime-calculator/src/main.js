import Vue from 'vue'
import App from './App.vue'
import { LMap, LTileLayer, LMarker,LIcon} from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import store from './store'
import router from './router'



Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-icon', LIcon);


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
