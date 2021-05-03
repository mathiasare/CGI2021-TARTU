<template>
  <!-- Navigate template. See docs for further info-->
  <nav>
    <div class="navbar">
      <div class="title-box">
        <h2>Uptime calculator</h2>
      </div>
      <!-- Router links to navigate in the webapp-->
      <router-link to="/"><h5>Home</h5></router-link>
      <router-link to="graphs"><h5>Graphs</h5></router-link>
    </div>

    <router-view />
  </nav>
</template>

<script>
// Navigate component to navigate between pages
import { mapMutations } from "vuex";
export default {
  methods: {
    //Store mutations import
    ...mapMutations({ setFromMap: "setFromMap" }),
  },
  watch: {
    //Router watcher to set global fromMap boolean correcty
    $route(to, from) {
      if (to.path != from.path) {
        if (to.path == "/") {
          //If routing to index from another page disable taking inputs from map.
          this.setFromMap(false);
        } else {
          //If routing to Graphs from another page, enable values from map
          this.setFromMap(true);
        }
      }
    },
  },
};
</script>

<style scoped>
nav {
  width: 100%;
  height: 3em;
  background-color: rgb(45, 80, 97);
}
.navbar {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(42, 180, 139);
}
.titlebox {
  width: 70%;
  background-color: inherit;
  display: flex;
}
</style>