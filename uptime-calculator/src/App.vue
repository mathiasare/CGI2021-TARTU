<template>

<div id="app">
  <div class="content">
    <Map/>
    <Inputs v-on:sendInputs="onButtonClick"/>
    <Output v-model="res" :output="res"/>
  </div>
</div>
  
</template>

<script>
import Inputs from "./components/Inputs";
import Output from "./components/Output";
import Map from "./components/Map";
import { getSunrise, getSunset } from 'sunrise-sunset-js';
export default {
  name: "App",
  components: {
    Inputs,
    Output,
    Map
  },
  data(){
    return{
      longitude:0,
      latitude:0,
      date: new Date(Date.now()),
      res:[]
    }
  },
  methods:{
    findUptime(){
      const sunrise = getSunrise(this.latitude,this.longitude,this.date)
      const sunset = getSunset(this.latitude,this.longitude,this.date)
      let minutes_sunrise = sunrise.getMinutes()
      let minutes_sunset = sunset.getMinutes()
      
      minutes_sunrise = minutes_sunrise + (sunrise.getHours()*60)
      minutes_sunset = minutes_sunset + (sunset.getHours()*60)

      const uptime = Math.floor((minutes_sunset - minutes_sunrise) /60) + " hours and " + ((minutes_sunset - minutes_sunrise)%60) + " minutes."

  
      this.res = ["Sun rises at: " +sunrise.toTimeString(),"Sun sets at: "+sunset.toTimeString(), "Sun is up for: "+uptime]
    },
    onButtonClick(data){
      this.longitude = parseFloat(data[0])
      this.latitude = parseFloat(data[1])
      this.date = new Date(data[2])
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

</style>
