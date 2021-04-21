<template>
  <div class="content">
    <Inputs />
    <Output answer="5.6 hours"/>
  </div>
</template>

<script>
import Inputs from "./components/Inputs";
import Output from "./components/Output";
import { getSunrise, getSunset } from 'sunrise-sunset-js';
export default {
  name: "App",
  components: {
    Inputs,
    Output
  },
  data(){
    return{
      longitude:59.422694106797614,
      latitude:24.723669322788975,
      
      date: new Date("2021-04-20")
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

      const result = Math.floor((minutes_sunset - minutes_sunrise) /60) + " hours and " + ((minutes_sunset - minutes_sunrise)%60) + " minutes."
      console.log(result)
  
      return result
    }
  },
  mounted(){
    this.findUptime()
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


</style>
