<template>
  <div>
      <SearchBox />
      <ListPopularMovie />
  </div>
</template>

<script>
import SearchBox from "~/components/SearchBox.vue";
import ListPopularMovie from "~/components/ListPopularMovie.vue";
export default {
    name: "IndexPage",
    components: { SearchBox, ListPopularMovie }
}
</script>
