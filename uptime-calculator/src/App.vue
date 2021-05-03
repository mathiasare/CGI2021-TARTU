<template>

<div id="app">
  <div class="content">
      <Navigate/> 
  </div>
</div>
  
</template>

<script>

//Root component from the app: Loads router to serve view components: Home and GraphsPage


import Navigate from './components/Navigate'
export default {
  name: "App",
  components: {
    Navigate
  },
  
};
</script>

<style>
*{
margin:0;
  padding:0;
}
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    
  
}
a{
    text-decoration: none;
}
ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
}

</style>
