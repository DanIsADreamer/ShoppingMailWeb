<template>
  <div class="home-view">
    <CarouselView/>
    <HotProductView/>
  </div>
</template>

<script>
  import CarouselView from "@/components/HomeView/CarouselView";
  import HotProductView from "@/components/HomeView/HotProductView";


  export default {
    name: 'homeView',
    components: {CarouselView, HotProductView},

  }
</script>

<style scoped>

</style>
