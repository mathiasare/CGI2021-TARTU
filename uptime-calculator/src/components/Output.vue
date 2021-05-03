<template>
  <!-- Output template. See docs for further info-->
  <div class="answer-box">
    <ul class="dataList">
      <!-- Displaying store values -->
      <li>
        <h3>{{ "Selected longitude:   " + this.$store.state.longitude }}</h3>
      </li>
      <li>
        <h3>{{ "Selected latitude:   " + this.$store.state.latitude }}</h3>
      </li>
      <li>
        <h3>
          {{ ("Selected date:   " + this.$store.state.date) | formatTime }}
        </h3>
      </li>
    </ul>

    <!-- Dynamic list rendering of outputs-->
    <ul class="resList">
      <li :key="o" v-for="o in output">
        <br />
        <h3>{{ o | formatTime }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
//Output component to display calculated values
export default {
  props: {
    output: Array,
  },
  data() {
    return {
      //global states
      latitude: this.$store.state.latitude,
      longitude: this.$store.state.longitude,
    };
  },
  //Filters for displaying date
  filters: {
    formatTime: function (value) {
      return value.split("(")[0];
    },
  },
};
</script>

<style scoped>
.answer-box {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 40%;

  align-items: left;
  font-size: 1em;
  background-color: rgba(45, 80, 97, 0.616);
  color: rgba(249, 252, 255, 0.815);
  padding-left: 3em;
  justify-content: center;
}

ul {
  text-align: left;
}
li {
  padding-top: 2em;
}
.dataList {
  position: sticky;
}
</style>