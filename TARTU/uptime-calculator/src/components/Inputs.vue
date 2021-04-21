<template>
  <div class="container">

  <label for="longitude">Longitude (X):</label>
  <input class="field" id="longitude" type="text" placeholder="Coordinates in EPSG:4326">


  <label  for="latitude">Latitude (Y):</label>
  <input class="field" id="latitude" type="text" placeholder="Coordinates in EPSG:4326">



  <label  for="date">Select date:</label>
  <input class="field" id="date" type="date">

  <button>Calculate uptime</button>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
  display:flex;
  flex-direction: column;
  width: 60%;
  justify-content: center;
  align-items: center;
}

.field{
  width: 40%;
}
label{
  margin-top: 4em;
}
button{
  font-size: 1.1rem;
  padding: 0.8em;
  margin-top: 6em;
}
</style>