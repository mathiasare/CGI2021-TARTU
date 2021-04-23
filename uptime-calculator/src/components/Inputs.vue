<template>
  <div class="container">

    <div class="storeData">
      <h3>{{"LNG:    "+this.$store.getters.getLongitude}}</h3>
      <h3>{{"LAT:    "+this.$store.getters.getLatitude}}</h3>
      <h3>{{"Date:    "+this.$store.getters.getDate}}</h3>
    </div>
    

  <label for="longitude">Longitude (X):</label>
  <input class="field" id="longitude" type="text" placeholder="Coordinates in EPSG:4326" v-model="longitudeInput">


  <label  for="latitude">Latitude (Y):</label>
  <input  class="field" id="latitude" type="text" placeholder="Coordinates in EPSG:4326" v-model="latitudeInput">


  <label  for="date">Select date:</label>
  <input class="field" id="date" type="date" v-model="dateInput">

  <label  for="mapTrigger">Coordinates from Map</label>
  <input id="mapTrigger" type="checkbox" @change="reverseFromMap">

  <button @click="commitToStore">Calculate uptime</button>
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
    }
  },
  methods:{
    ...mapMutations({reverseFromMap:'reverseFromMap',setDate:'setDate',setLongitude:'setLongitude',setLatitude:'setLatitude'}),
    commitToStore(){
      if(this.checkInputs()){
      if(!this.$store.state.fromMap){
          this.setLongitude(this.longitudeInput)
          this.setLatitude(this.latitudeInput)
        }
        this.setDate(this.dateInput)
        }
        else{
        alert("Invalid inputs!")
        }
      
      
    },
    checkInputs(name){
      if(name=="lng"){
      if((this.longitudeInput) =='' || isNaN(this.longitudeInput))return false;
      }
      else if(name == "lat"){
        if((this.latitudeInput == '' || isNaN(this.latitudeInput))) return false;
      }
      else if(name=="date"){
        if((this.dateInput==''||new Date(this.dateInput).toString()=="Invalid Date")) return false;
      }else{
        return false;
      }
      return true;
    }
  },
  watch:{
    longitudeInput:function(){
      if(!this.$store.getters.isFromMap){
        if(this.checkInputs("lng")){
          this.setLongitude(this.longitudeInput)
        }else{
          this.setLongitude("Invalid input!")
        }
      
    }
    },
    latitudeInput:function(){
      if(!this.$store.getters.isFromMap){
        if(this.checkInputs("lat")){
          this.setLatitude(this.latitudeInput)
        }else{
          this.setLatitude("Invalid input!")
        }
      
    }
    },
    dateInput:function(){
      if(this.checkInputs("date")){
          this.setDate(this.latitudeInput)
        }else{
          this.setDate("Invalid input!")
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
  width: 70%;
}
</style>