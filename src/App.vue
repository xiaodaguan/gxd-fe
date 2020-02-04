<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<script>
import BasicLayout from "./components/BasicLayout.vue";

export default {
  name: "app",
  components: {
    BasicLayout
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
