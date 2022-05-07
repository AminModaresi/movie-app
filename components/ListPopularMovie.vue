<template>
    <section class="py-10">
        <div class="container-fluid">
            <p class="text-4xl font-bold mb-10 ml-5 text-gray-50 relative title">Popular Movie</p>
            <VueSlickCarousel v-bind="settings">
                <div class="px-6" v-for="movieItem in ShowPopularListMovie" :key="movieItem.id">
                    <MovieItem :id="movieItem.id" :title="movieItem.original_title" :image="movieItem.poster_path"
                        :vote="movieItem.vote_average" :release-date="movieItem.release_date" />
                </div>
            </VueSlickCarousel>
        </div>
    </section>
</template>

<script>
import MovieItem from "~/components/MovieItem.vue";
export default {
    components: { MovieItem },
    data: () => ({
        settings: {
            "dots": true,
            "infinite": true,
            "slidesToShow": 7,
            "slidesToScroll": 7,
            "touchThreshold": 5,
            "autoplay": true,
            "speed": 800,
            "autoplaySpeed": 7000,
        }
    }),
    computed: {
        ShowPopularListMovie() {
            return this.$store.getters.ShowPopularListMovie
        }
    }
}
</script>
