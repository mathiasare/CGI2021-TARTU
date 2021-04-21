<template>
  <div class="answer-box">
      <h1 v-text="answer"></h1>
</div>
</template>

<script>
export default {
    props:{
        answer:String
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
}
</style>