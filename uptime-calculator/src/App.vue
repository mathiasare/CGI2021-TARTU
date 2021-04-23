<template>

<div id="app">
  <div class="content">
    <Map/>
    <Inputs/>
    <Output :output="res"/>
  </div>
</div>
  
</template>

<script>
import Inputs from "./components/Inputs";
import Output from "./components/Output";
import Map from "./components/Map";
import { getSunrise, getSunset } from 'sunrise-sunset-js';
import {mapMutations} from 'vuex'
export default {
  name: "App",
  components: {
    Inputs,
    Output,
    Map
  },
  data(){
    return{
      res:[]
    }
  },
  methods:{
    ...mapMutations(['setLongitudeText','setLatitudeText']),
    findUptime(){
      const lng = this.$store.getters.getLongitude
      const lat = this.$store.getters.getLatitude
      const date = this.$store.getters.getDate
      const sunrise = getSunrise(lng,lat,date)
      const sunset = getSunset(lng,lat,date)
      let minutes_sunrise = sunrise.getMinutes()
      let minutes_sunset = sunset.getMinutes()
      
      minutes_sunrise = minutes_sunrise + (sunrise.getHours()*60)
      minutes_sunset = minutes_sunset + (sunset.getHours()*60)

      const uptime = Math.floor((minutes_sunset - minutes_sunrise) /60) + " hours and " + ((minutes_sunset - minutes_sunrise)%60) + " minutes."

  
      this.res = ["Sun rises at: " +sunrise.toTimeString(),"Sun sets at: "+sunset.toTimeString(), "Sun is up for: "+uptime]
    },
    onButtonClick(){
      this.findUptime()
    }
  }
};
</script>

<style>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
  padding:0;
}
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}
ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.testButton{
   font-size: 1.1rem;
  padding: 0.8em;
  margin-top: 6em;
}

</style>
