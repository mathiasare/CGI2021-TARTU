<template>
  <div class="answer-box">
    <h2>{{ "Selected longitude:   "+this.$store.state.longitude }}</h2>
    <h2>{{ "Selected latitude:   "+this.$store.state.latitude }}</h2>
    <h2>{{"Selected date:   " +this.$store.state.date.toTimeString() | formatTime}}</h2>
    <ul class="resList" >
      <li :key="o" v-for="o in output"><h3>{{o | formatTime}}</h3></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    output: Array,
  },
  data(){
    return{
      latitude:this.$store.state.latitude,
      longitude:this.$store.state.longitude,
    }
  },
  filters: {
  formatTime: function (value) {
    return value.split("(")[0]
  }
}
};
</script>

<style scoped>
.answer-box {
  background-color: chocolate;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 40%;
  justify-content: center;
  align-items: center;
  font-size: 1em;
}
</style>