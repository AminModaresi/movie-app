<template>
  <input @keydown.enter="SearchName" v-model="movieName" type="text"
    class="border border-gray-300 bg-gray-300 text-gray-900 mr-4 p-2 rounded outline-none"
    placeholder="Please Enter Movie Name">
</template>

<script>
export default {
  data: () => ({
    movieName: "",
  }),
  methods: {
    SearchName() {
      this.$store.dispatch("SearchMovieName", this.movieName)
      this.movieName = "";
      setTimeout(() => this.$router.push("/movie-search"), 1000)
    }
  }
}
</script>