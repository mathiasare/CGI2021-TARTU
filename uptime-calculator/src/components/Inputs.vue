<template>
  <div class="container">

  <label for="longitude">Longitude (X):</label>
  <input class="field" id="longitude" type="text" placeholder="Coordinates in EPSG:4326" v-model="longitudeInput">


  <label  for="latitude">Latitude (Y):</label>
  <input class="field" id="latitude" type="text" placeholder="Coordinates in EPSG:4326" v-model="latitudeInput">



  <label  for="date">Select date:</label>
  <input class="field" id="date" type="date" v-model="dateInput">

  <button @click="emitToApp">Calculate uptime</button>
</div>
</template>

<script>
export default {
  name:"Inputs",

  data(){
    return{
      longitudeInput: '',
      latitudeInput:'',
      dateInput:''
    }
  },
  methods:{
    emitToApp(){
      if(this.checkInputs()){
        this.$emit('sendInputs',[this.longitudeInput,this.latitudeInput,this.dateInput])
      }else{
        alert("Invalid inputs!")
      }
      
    },
    checkInputs(){
      if(this.longitudeInput=='' || this.latitudeInput == '' || this.dateInput=='') return false;
      if(isNaN(this.longitudeInput) || isNaN(this.latitudeInput) || new Date(this.dateInput).toString()=="Invalid Date") return false;
      return true
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
</style>