<template>
  <div>
    <button @click="toggleScreen">{{ buttonText }}</button>
    <ListMovie :movies="movies" v-if="!onMovieListPage" />
    <AddMovie :addNewMovie="addNewMovie" v-if="onMovieListPage" />
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
      movies: [],
      onMovieListPage: false
    };
  },
  computed: {
    buttonText() {
      if (this.onMovieListPage) return "Go To Movies List";
      return "Add Movie";
    }
  },
  methods: {
    addNewMovie(movie) {
      this.movies.push(movie);
    },
    toggleScreen() {
      this.onMovieListPage = !this.onMovieListPage;
    }
  }
};
</script>
