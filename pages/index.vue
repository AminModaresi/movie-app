<template>
  <div>
    <TheHeader />
    <ListPopularMovie />
    <ListTopRatedMovie />
    <ListTrendingMovie />
  </div>
</template>

<script>
import ListPopularMovie from "~/components/ListPopularMovie.vue";
import ListTopRatedMovie from "~/components/ListTopRatedMovie.vue";
import TheHeader from "~/components/TheHeader.vue";
import ListTrendingMovie from "~/components/ListTrendingMovie.vue";
export default {
  name: "IndexPage",
  components: { ListPopularMovie, ListTopRatedMovie, TheHeader, ListTrendingMovie },
  computed: {
    ShowSearchMovieList() {
      return this.$store.getters.ShowSearchMovieList
    }
  }
}
</script>
