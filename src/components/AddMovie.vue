<template>
  <div>
    <h1>Add Movie to list</h1>
    <form>
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
    </form>
  </div>
</template>

<script>
export default {
  name: "AddMovie",
  data() {
    return {
      movieName: "",
      genre: "",
      rating: null,
      website: ""
    };
  }
};
</script>

<style></style>
