<template>
  <section class="py-10">
    <div class="container mx-auto">
      <div class="py-5 flex justify-center shadow-lg">
        <input @keydown.enter="SearchName" v-model="movieName" type="text"
          class="border border-gray-300 mr-4 w-1/2 p-4 rounded outline-none text-xl"
          placeholder="Please Enter Movie Name">
        <button @click="SearchName" class="border border-green-300 bg-green-400 text-gray-100 rounded p-4 outline-none">
          Search
        </button>
      </div>
    </div>
    <div class="container mx-auto">
      <VueSlickCarousel v-bind="settings">
        <div class="w-10 h-10 bg-yellow-400">1</div>
        <div class="w-10 h-10 bg-yellow-400">2</div>
        <div class="w-10 h-10 bg-yellow-400">3</div>
        <div class="w-10 h-10 bg-yellow-400">4</div>
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    movieName: "",
    settings: {
      "dots": true,
      "focusOnSelect": true,
      "infinite": true,
      "speed": 500,
      "slidesToShow": 3,
      "slidesToScroll": 3,
      "touchThreshold": 5
    }
  }),
  methods: {
    SearchName() {
      this.$store.dispatch("SearchMovieName", this.movieName)
      this.movieName = ""
    }
  }
}
</script>