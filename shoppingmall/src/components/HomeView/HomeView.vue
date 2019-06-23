<template>
  <div class="home-view">
    <CarouselView/>
    <div class="container">
      <div class="page-header">
        <h1>热门商品</h1>
      </div>
    </div>
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
