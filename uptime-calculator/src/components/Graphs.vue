<template>
<!-- Graphs template. See docs for further info-->
  <div class="graphs-main">
    <!-- Displaying map-->
    <div class="map-container">
        <Map/>
    </div>
      
    <div class="inputs">
      <!-- Displaying inputs of graph page-->
        <label for="begin-date">From:</label>
      <input type="date" v-model="beginDate" id="begin-date">
      <label for="end-date">To: </label>
      <input type="date" v-model="endDate" id="end-date">

      <button @click="onButtonClick" >Generate graph!</button>
      <h4 v-if="hasIncorrectInputs">Incorrect inputs!</h4>
    </div>

    <!-- Displaying Line Chart if chartData array prop is not empty-->
    <div class="chart-box" v-show="chartData.length != 0">
      <p>{{title}}</p>
      <line-chart  :chartData="chartData" :options="chartOptions" />
    </div>
    
  
  </div>
</template>

<script>

//Graphs component to display GraphPage contents, handle user input and render LineChart
import {getTimes} from 'suncalc'
export default {

    name:"Graphs",
    components:{
      //Async imports to make component loading non-blocking
        Map:()=>import("./Map"),
        LineChart: () => import("./LineChart")
    },
    data(){
    return{

      //Attributes to handle user input
      beginDate:'',
      endDate:'',
      hasIncorrectInputs:false,

      //Chart data to pass to LineChart child component
      chartData:[],

      //Customizable chart options
      chartOptions:{
        responsive:true,
        maintainAspectRatio:false

      },
      title:''
      
    }
  },
  methods:{

    //Generate graph! button onclick handler
      async onButtonClick(){
        if(await(this.checkInputValues())){
          
          
          this.hasIncorrectInputs = false;
          this.title = "Uptime graph at coordinates: {"+this.$store.getters.getLatitude+","+this.$store.getters.getLongitude+"} between dates: "
          + this.beginDate + "  to " + this.endDate+"."
          this.chartData = await(this.getGraphValues(new Date(this.beginDate),new Date(this.endDate)))
        }else{
          this.hasIncorrectInputs = true;
        }
          
          
      },
      //Input validation
     async checkInputValues(){

       //Check if timestamps are convertable to Date objects
        const dateBeg = new Date(this.beginDate)
        const dateEnd = new Date(this.endDate)
        if(dateBeg.toString()=="Invalid Date" || dateEnd.toString()=="Invalid Date") {
        return false;
        }else{
          //Check if start date is before end date
        if(dateBeg.getTime()>dateEnd.getTime()) return false
        //Check if date between years 1800-2100
        if(dateBeg.getFullYear()<1800 || dateBeg.getFullYear()>2100 ||dateEnd.getFullYear()<1800 || dateEnd.getFullYear()>2100) return false;
        //Check if dates are less than 2 years apart
        if(dateEnd.getFullYear() - dateBeg.getFullYear()>1) return false;
      }
      return true;
      },
      //Method to calculate chart data and return it as 2 dim array of dates and uptimes
     async getGraphValues(beginning, end){
        end.setDate(end.getDate()+1);
        let date = beginning
        let res = []
        let dates = []

        const days_between = (end.getTime()-date.getTime())/(1000*60*60*24)
        for(let i = 0; i<= days_between;i++){
          res.push(await(this.getUptime(date)))
          dates.push(new Date(date.getTime()).toDateString())
          date.setDate(date.getDate()+1);
        }
        return [dates,res];
        

      },
      //Method to calculate uptime of the selected date and global latitude and longitude values.
     async getUptime(date){
      

      
      const lng = this.$store.getters.getLongitude
      const lat = this.$store.getters.getLatitude

  
      const times = getTimes(date,lat,lng)

      
      const sunrise = times.sunrise
      const sunset = times.sunset
      const minutes_sunrise = sunrise.getTime()/(1000*60)
      const minutes_sunset = sunset.getTime()/(1000*60)
      const uptime = (minutes_sunset - minutes_sunrise)/60
      return uptime
      }
  }
    
}
</script>

<style scoped>
.graphs-main{
  padding: 1em;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(42, 180, 139, 0.637);
}
.map-container{
  width: 60%;
  height: 50vh;
}
h4{
  color:red;
  font-style: italic;
}
.chart-box{
  width: 100%;
  height: auto;
  margin-top: 5em;
}
</style>