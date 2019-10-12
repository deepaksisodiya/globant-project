<template>
  <div>
    <header>Movies List</header>
    <ul>
      <ul v-for="(movie, index) in movies" :key="index">
        <p>{{ movie.movieName }}</p>
        <p>{{ movie.genre }}</p>
        <p>{{ movie.rating }}</p>
      </ul>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListMovie",
  props: {
    movies: {
      type: Array,
      required: true
    }
  }
};
</script>
