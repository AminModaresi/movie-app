<template>
    <section class="py-10">
        <div class="container-fluid">
            <p class="text-4xl font-bold mb-10 ml-5 text-gray-50 relative title">TRENDING MOVIES</p>
            <BaseSlider v-if="!!ShowPopularListMovie">
                <div class="px-6" v-for="movieItem in ShowPopularListMovie" :key="movieItem.id">
                    <MovieItem :id="movieItem.id" :title="movieItem.original_title" :image="movieItem.poster_path"
                        :vote="movieItem.vote_average" :release-date="movieItem.release_date" />
                </div>
            </BaseSlider>
        </div>
    </section>
</template>

<script>
import MovieItem from "~/components/MovieItem.vue";
import BaseSlider from "~/components/UI/BaseSlider.vue";
export default {
    components: { MovieItem, BaseSlider },
    data: () => ({
        apiKey: "3881c9135b8befa017c4ec3b4fc8ed83",
        ShowPopularListMovie : ''
    }),
    async fetch() {
        let response = await this.$axios.$get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&language=en-US&page=1`)
        console.log(response.results);
        this.ShowPopularListMovie = response.results
    },
    fetchOnServer: false,
}
</script>
