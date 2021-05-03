<template>
  <!-- Map template. See docs for further info-->
  <div class="map-box">
    <!-- Leaflet map, map properties are binded to component attributes.-->
    <l-map
      :zoom="zoom"
      :center="center"
      :bounds="bounds"
      :max-bounds="maxbounds"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker :icon="icon" :lat-lng="center"> </l-marker>
      <!-- Marker icon -->
    </l-map>
  </div>
</template>
<script>
//Map component to display map

import { mapMutations } from "vuex";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import { icon, latLngBounds } from "leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      //Map is loaded from external url.
      url:
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png",
      zoom: 2,
      //Center is binded to global state
      center: this.$store.state.mapCenter,
      bounds: latLngBounds([
        [250, -236],
        [-250, 236],
      ]),
      maxbounds: latLngBounds([
        [250, -236],
        [-250, 245],
      ]),

      active: false,
      icon: icon({
        iconUrl: require("../assets/icon.png"),
        iconSize: [32, 37],
        iconAnchor: [16, 37],
      }),
    };
  },
  methods: {
    //Import of store mutations
    ...mapMutations({
      setLongitude: "setLongitude",
      setLatitude: "setLatitude",
      setMapCenter: "setMapCenter",
    }),

    //Methods to handle attribute updates
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
      this.setMapCenter(center);
      this.active = this.$store.getters.isFromMap; //Checks if map is active
      if (this.active) {
        //Update longitude and latitude values of the global state
        this.setLongitude(Math.round(center.lng * 1000.0) / 1000.0);
        this.setLatitude(Math.round(center.lat * 1000.0) / 1000.0);
        this.$emit("inputsChanged"); //Emit signal to parent component, to calculate new outputs.
      }
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    },
  },
};
</script>

<style scoped>
.map-box {
  width: 100%;
  height: 100%;
}
</style>
