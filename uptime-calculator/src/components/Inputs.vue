<template>
  <div class="container">

    <div class="storeData">
      <h3>{{"LNG:    "+this.$store.getters.getLongitude}}</h3>
      <h3>{{"LAT:    "+this.$store.getters.getLatitude}}</h3>
      <h3>{{"Date:    "+this.$store.getters.getDate}}</h3>
    </div>
    

  <label for="longitude">Longitude (X):</label>
  <input class = "field" v-bind:class="{invalidLongitude:invalid}" id="longitude" type="text" placeholder="Coordinates in EPSG:4326" v-model="longitudeInput">


  <label  for="latitude">Latitude (Y):</label>
  <input  class="field" :class="{invalidLatitude:'invalid'}" id="latitude" type="text" placeholder="Coordinates in EPSG:4326" v-model="latitudeInput">


  <label  for="date">Select date:</label>
  <input class="field" :class="{invalidDate:invalid}" id="date" type="date" v-model="dateInput"/>

  <label  for="mapTrigger">Coordinates from Map</label>
  <input id="mapTrigger" type="checkbox" @change="reverseFromMap">

</div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name:"Inputs",

  data(){
    return{
      longitudeInput:'',
      latitudeInput:'',
      dateInput:'',
      invalidLongitude:false,
      invalidLatitude: false,
      invalidDate:false
    }
  },
  methods:{
    ...mapMutations({reverseFromMap:'reverseFromMap',setDate:'setDate',setLongitude:'setLongitude',setLatitude:'setLatitude'}),

    checkInputs(name){
      if(name=="lng"){
      if((this.longitudeInput) =='' || isNaN(this.longitudeInput)){
        return false;
      }
      }
      else if(name == "lat"){
        if((this.latitudeInput == '' || isNaN(this.latitudeInput))){
        return false;
      }
      }
      else if(name=="date"){
        if((this.dateInput==''||new Date(this.dateInput).toString()=="Invalid Date")) {
        return false;
      }
      }
      return true;
    }
  },
  watch:{
    longitudeInput:function(){
      if(!this.$store.getters.isFromMap){
        if(this.checkInputs("lng")){
          this.invalidLongitude=false;
          this.setLongitude(this.longitudeInput)
          this.$emit('inputsChanged')
        }else{
            this.invalidLongitude=true;
        }
      
    }
    },
    latitudeInput:function(){
      if(!this.$store.getters.isFromMap){
        if(this.checkInputs("lat")){
          this.invalidLatitude=false;
          this.setLatitude(this.latitudeInput)
          this.$emit('inputsChanged')
        }else{
          this.invalidLatitude=true;
        }
      
    }
    },
    dateInput:function(){
      if(this.checkInputs("date")){
          this.invalidDate=false;
          this.setDate(this.latitudeInput)
          this.$emit('inputsChanged')
        }else{
          this.invalidDate=true;
        }
    }
  }
  

}
</script>

<style scoped>
.container{
  display:flex;
  flex-direction: column;
  width: 60%;
  justify-content: center;
  align-items: center;
}

.field{
  width: 40%;
}
label{
  margin-top: 4em;
}
button{
  font-size: 1.1rem;
  padding: 0.8em;
  margin-top: 6em;
}
.storeData{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.invalid{
  border: 1px solid red;
}
</style>