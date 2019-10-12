<template>
  <div>
    <h1>Add Movie to list</h1>

    <form @submit="checkForm">
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
      </p>
      <p>
        <label for="movieName">Movie Name* </label>
        <input v-model="movieName" type="text" />
      </p>
      <p>
        <label for="genre">Genre*</label>
        <select v-model="genre">
          <option>Star Wars</option>
          <option>Vanilla Sky</option>
          <option>Atomic Blonde</option>
        </select>
      </p>
      <p>
        <label for="rating">Rating* </label>
        <input v-model="rating" type="number" min="0" max="5" />
      </p>
      <p>
        <label for="website">Website </label>
        <input v-model="website" type="text" />
      </p>
      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddMovie",
  data() {
    return {
      errors: [],
      movieName: null,
      genre: null,
      rating: null,
      website: null
    };
  },
  props: {
    addMovie: {
      type: Function,
      required: true,
    }
  },
  methods: {
    checkForm: function(event) {
      event.preventDefault();
      this.errors = [];

      if (!this.movieName) {
        this.errors.push("Movie name is required");
      }

      if (!this.genre) {
        this.errors.push("genre is required");
      }

      if (!this.rating) {
        this.errors.push("rating is required");
      }

      if (!this.errors.length) {
        this.addMovieToList();
      }
    },

    addMovieToList() {
      const data = {
        movieName: this.movieName,
        genre: this.genre,
        rating: this.rating,
        website: this.website
      };
      this.addMovie(data);
      this.resetData();
    },

    resetData() {
      this.movieName = null;
      this.genre = null;
      this.rating = null;
      this.website = null;
    }
  }
};
</script>

<style></style>
