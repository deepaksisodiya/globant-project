<template>
  <div>
    <AddMovie :addNewMovie="addNewMovie" />
    <ListMovie :movies="movies" />
  </div>
</template>

<script>
import AddMovie from "./components/AddMovie.vue";
import ListMovie from "./components/ListMovie.vue";

export default {
  name: "app",
  components: {
    AddMovie,
    ListMovie
  },
  data() {
    return {
      movies: []
    };
  },
  methods: {
    addNewMovie(movie) {
      this.movies.push(movie);
    }
  }
};
</script>
