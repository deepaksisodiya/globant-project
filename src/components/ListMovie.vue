<template>
  <ul>
    <ul v-for="(movie, index) in movies" :key="index">
      {{
        movie.movieName
      }}
    </ul>
  </ul>
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
