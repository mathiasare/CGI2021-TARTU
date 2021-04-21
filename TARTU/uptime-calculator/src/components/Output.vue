<template>
  <div class="answer-box">
    <ul>
      <li v-for="o in output" :key="o" v-text="o"></li>
    </ul>

</div>
</template>

<script>
export default {
    props:{
        output:Array
    }
}
</script>

<style scoped>
.answer-box {
  background-color:chocolate;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 30%;
  justify-content: center;
  align-items: center;
  font-size:1em;
}


</style>