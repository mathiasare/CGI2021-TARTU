<template>
  <nav>
    <div class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="graphs">Graphs</router-link>
    </div>
    <router-view/>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  width: 100%;
  height: 3em;
  background-color: green;
}
.navbar{
    width:30%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
a{
    text-decoration: none;
}
</style>