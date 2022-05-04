<template>
  <div>
    <SearchBox />
    <ListPopularMovie v-if="!ShowSearchMovieList"/>
    <ListSearchMovie v-else/>
  </div>
</template>

<script>
import SearchBox from "~/components/SearchBox.vue";
import ListPopularMovie from "~/components/ListPopularMovie.vue";
import ListSearchMovie from "~/components/ListSearchMovie.vue";
export default {
  name: "IndexPage",
  components: { SearchBox, ListPopularMovie, ListSearchMovie },
  computed: {
    ShowSearchMovieList() {
      return this.$store.getters.ShowSearchMovieList
    }
  }
}
</script>
