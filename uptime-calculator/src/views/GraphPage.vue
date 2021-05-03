<template>
  <Graphs/>
</template>

<script>


export default {
    name:"GraphsPage",
    components:{
      Graphs: () => import("../components/Graphs")
    }
}
</script>

<style scoped>

</style>