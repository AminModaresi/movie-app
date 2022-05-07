<template>
  <div>
    <ListPopularMovie />
  </div>
</template>

<script>
import ListPopularMovie from "~/components/ListPopularMovie.vue";
export default {
  name: "IndexPage",
  components: { ListPopularMovie },
  computed: {
    ShowSearchMovieList() {
      return this.$store.getters.ShowSearchMovieList
    }
  }
}
</script>
