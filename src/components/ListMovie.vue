<template>
  <div>
    <ul>
      <li v-for="(movie, index) in movies" :key="index">
        <p>{{ movie.movieName }}</p>
        <p>{{ movie.genre }}</p>
        <p>{{ movie.rating }}/5</p>
      </li>
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

<style>
ul {
  background: #cce5ff;
  padding: 20px;
}

ul li {
  background: #3399ff;
  margin: 5px;
}
</style>
