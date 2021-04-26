<template>
  <div class="graphs-main">
      <Map/>
      <div class="storeData">
      <h3>{{"LNG:    "+this.$store.getters.getLongitude}}</h3>
      <h3>{{"LAT:    "+this.$store.getters.getLatitude}}</h3>

    </div>
    <div class="inputs">
        <label for="begin-date">From:</label>
      <input type="date" v-model="beginDate" id="begin-date">
      <label for="end-date">To: </label>
      <input type="date" v-model="endDate" id="end-date">

      <button @click="onButtonClick" >Generate graph!</button>
    </div>
  </div>
</template>

<script>
import Map from '../components/Map'
export default {
    name:"Graphs",
    components:{
        Map
    },
    data(){
    return{
      beginDate:'',
      endDate:''
    }
  },
  methods:{
      onButtonClick(){
          console.log(this.beginDate)
          console.log(this.endDate)
      }
  }
    
}
</script>

<style>

</style>