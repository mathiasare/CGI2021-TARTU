<template>

  <div class="content">
    <div class="map-container">
      <Map @inputsChanged="findUptime"/>
    </div>
    
    <Inputs @inputsChanged="findUptime"/>
    <Output :output="res"/>
</div>
  
</template>

<script>

//Home page of the webapp

//Uses child components: Inputs,Map and Output to: 

//1) Get inputs from user via form or Map

//2) Display selected coordinate and date, calculated sunrise and sunset times, and uptime of the sun



import Inputs from "../components/Inputs";
import Output from "../components/Output";
import Map from "../components/Map";
import {getTimes} from 'suncalc'
import {mapMutations} from 'vuex'
export default {
  name: "Home",
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
    //Vuex mutations to update global state
    ...mapMutations(['setLongitudeText','setLatitudeText']),


    //Method to calculate sunrise,sunset and uptime, returns values as formatted strings in an array
    findUptime(){
      const lng = this.$store.getters.getLongitude
      const lat = this.$store.getters.getLatitude
      const date = this.$store.getters.getDate

  
      const times = getTimes(date,lat,lng)

      
      const sunrise = times.sunrise
      const sunset = times.sunset
      const minutes_sunrise = sunrise.getTime()/(1000*60)
      const minutes_sunset = sunset.getTime()/(1000*60)
      

      const uptime = Math.floor((minutes_sunset - minutes_sunrise) /60) + " hours and " + ((minutes_sunset - minutes_sunrise)%60) + " minutes."

  
      this.res = ["Sun rises at: " +sunrise.toTimeString(),"Sun sets at: "+sunset.toTimeString(), "Sun is up for: "+uptime]
    }
  }
};
</script>

<style scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  background-color: rgba(42, 180, 139, 0.637);
}

.testButton{
   font-size: 1.1rem;
  padding: 0.8em;
  margin-top: 6em;
}
.map-container{
  width: 70%;
  height: 88vh;
}

</style>
