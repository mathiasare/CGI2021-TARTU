<template>
<!-- Inputs template. See docs for further info-->
  <div class="container">
  <!-- Latitude input and error handling message -->
  <label  for="latitude">Latitude (Y):</label>
    <!-- Binded to invalidLatitude, fromMap, latitudeInput.-->
  <input  class="field" :class="{invalid:invalidLatitude}" :readonly="fromMap" id="latitude" type="text" placeholder="Coordinates in EPSG:4326" v-model="latitudeInput">
  <h4 v-if="invalidLatitude">Incorrect value!</h4>  
  <!-- Binded to invalidLongitude, fromMap, longitudeInput.-->
  <label for="longitude">Longitude (X):</label>
  <input class = "field" v-bind:class="{invalid:invalidLongitude}" :readonly="fromMap"  id="longitude" type="text" placeholder="Coordinates in EPSG:4326" v-model="longitudeInput">
  <h4 v-if="invalidLongitude">Incorrect value!</h4>


  <!-- Binded to invalidDate, dateInput.-->
  <label  for="date">Select date (years 1800-2100):</label>
  <input class="field" :class="{invalid:invalidDate}" id="date" type="date" v-model="dateInput"/>
  <h4 v-if="invalidDate">Incorrect value!</h4>


  <!-- Binded to fromMap-->
  <label  for="mapTrigger">Coordinates from Map</label>
  <input id="mapTrigger" type="checkbox" v-model="fromMap">

</div>
</template>

<script>

//Inputs component, handles user input
import {mapMutations} from 'vuex'
export default {
  name:"Inputs",

  data(){
    return{

      //Values binded to global state in watchers
      fromMap:false, 
      longitudeInput:'',
      latitudeInput:'',
      dateInput:'',


      //Local attributes
      invalidLongitude:false,
      invalidLatitude: false,
      invalidDate:false
    }
  },
  methods:{
      //Import of store mutations
    ...mapMutations({setFromMap:'setFromMap',setDate:'setDate',setLongitude:'setLongitude',setLatitude:'setLatitude'}),


    //Method to check inputs of all 3 input elements
    //Latitutde and longitude have to be numeric
    //Timestamp has to be convertable to Date object with year between 1800 and 2100
    checkInputs(name){
      if(name=="lng"){
      if(isNaN(this.longitudeInput)){
        return false;
      }
      }
      else if(name == "lat"){
        if(isNaN(this.latitudeInput)){
        return false;
      }
      }
      else if(name=="date"){
        if(new Date(this.dateInput).toString()=="Invalid Date") {
        return false;
        }else{
        let checkedDate = new Date(this.dateInput)
        if(checkedDate.getFullYear()<1800 || checkedDate.getFullYear()>2100){
          return false;
        }
      }
      }
      return true;
    }
  },

  //Watchers to handle changes in inputs
  //Updating of global state
  watch:{
    longitudeInput:function(){
      if(!this.$store.getters.isFromMap){
        if(this.longitudeInput == ''){ //If input is empty string then change value to 0.0
          this.invalidLongitude=false;
          this.setLongitude(0.0)
          this.$emit('inputsChanged')
        }
        else if(this.checkInputs("lng")){
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
        if(this.latitudeInput == ''){ //If input is empty string then change value to 0.0
          this.invalidLatitude=false;
          this.setLatitude(0.0) 
          this.$emit('inputsChanged')
        }
        else if(this.checkInputs("lat")){
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
        console.log(this.dateInput)
          this.invalidDate=false;
          this.setDate(this.dateInput)
          this.$emit('inputsChanged')
        }else{
          this.invalidDate=true;
        }
    },
    fromMap:function() { //Coordinates from Map checkbox bind
      this.setFromMap(this.fromMap)
      if(this.fromMap){ //Updating map center
       const center = this.$store.state.mapCenter
        this.setLatitude(Math.round(center.lat * 1000.0) / 1000.0)
        this.setLongitude(Math.round(center.lng * 1000.0) / 1000.0)
        this.$emit('inputsChanged')
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
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: rgba(42, 180, 139, 0.637);

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
.invalid{
  border: 1.5px solid red;
}
h4{
  color:red;
  font-style: italic;
}
input:read-only{
  background-color: rgb(162, 194, 191);
  border: none;
}
</style>