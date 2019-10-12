<template>
  <div>
    <AddMovie />
  </div>
</template>

<script>
import AddMovie from "./components/AddMovie.vue";

export default {
  name: "app",
  components: {
    AddMovie
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
  margin-top: 60px;
}
</style>
