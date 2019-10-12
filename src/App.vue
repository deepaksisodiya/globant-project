<template>
  <div>
    <div class="header">{{ headertext }}</div>
    <button @click="toggleScreen" class="button">{{ buttonText }}</button>
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
    },
    headertext() {
      if (this.onMovieListPage) return "Add Movie";
      return "Movies List";
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

<style>
.button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.header {
  padding: 60px;
  text-align: center;
  background: #1abc9c;
  color: white;
  font-size: 30px;
}
</style>
