<template>
  <div class="answer-box">
    <h1>{{ longitude }}</h1>
    <h1>{{ latitude }}</h1>
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
      longitude:this.$store.state.latitude,
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
  width: 30%;
  justify-content: center;
  align-items: center;
  font-size: 1em;
}
</style>