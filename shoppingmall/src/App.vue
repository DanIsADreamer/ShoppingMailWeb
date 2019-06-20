<template>
  <div id="app">
  <!--    导航条-->
    <NavView/>

    <router-view/>
  </div>
</template>

<script>

  import NavView from "./components/NavView/NavView";
export default {
  name: 'App',
  components: {NavView},
  data(){
    component:NavView
  }
}
</script>

<style>

</style>
