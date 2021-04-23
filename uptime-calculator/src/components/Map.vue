<template>

  <div class="map-box">
    <l-map
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker :icon="icon" :lat-lng="center">
      </l-marker>
    </l-map>
  </div>
  
</template>

<script>
import {mapMutations} from 'vuex'
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';
import {icon} from "leaflet"

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 3,
      center: [47.413220, -1.219482],
      bounds: null,
      active:false,
      icon: icon({
        iconUrl: require("../assets/icon.png"),
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      }),
    };
  },
  methods: {
    ...mapMutations({setLongitude:"setLongitude",setLatitude:"setLatitude"}),
    zoomUpdated (zoom) {
      this.zoom = zoom;
    },
    centerUpdated (center) {
      this.center = center;
      this.active = this.$store.getters.isFromMap
      if(this.active){
        this.setLongitude(Math.round(center.lng*1000.0)/1000.0)
        this.setLatitude(Math.round(center.lat*1000.0)/1000.0)
      }
      
    },
    boundsUpdated (bounds) {
      this.bounds = bounds;
    }
  }
}
</script>

<style scoped>
  .map-box{
      height: 50vh;
      width: 40%;
  }
</style>
