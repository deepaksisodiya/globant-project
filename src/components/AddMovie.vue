<template>
  <div>
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
    addNewMovie: {
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
      this.addNewMovie(data);
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

<style>
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
