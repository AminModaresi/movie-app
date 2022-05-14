<template>
    <VueSlickCarousel v-if="!!ShowHeaderItem" v-bind="settings">
        <div v-for="HeaderItem in ShowHeaderItem" class="slider-header bg-no-repeat bg-cover" :style='{ backgroundImage: "url(" + `https://image.tmdb.org/t/p/original${HeaderItem.backdrop_path}` + ")", }' :key="HeaderItem.id">
            <div class="slider-header-content w-3/4 lg:w-2/4 xl:1/4 text-gray-50">
                <p class="text-6xl font-bold mb-5">{{ HeaderItem.title }}</p>
                <div class="font-bold mb-3">
                    <span class="mr-3 border-red-800 inline-flex rounded-full items-center justify-center border-4 w-16 h-9">+18</span>
                    <span class="mr-3">{{ HeaderItem.vote_average }}</span>
                    <span class="mr-3">{{  HeaderItem.release_date.split("-").join().slice(0,4) }}</span>
                </div>
                <p class="font-sm">
                    {{ HeaderItem.overview }}
                </p>
            </div>
        </div>
    </VueSlickCarousel>
</template>
<script>
export default {
    data: () => ({
        settings: {
            "dots": false,
            "infinite": true,
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "touchThreshold": 5,
            "autoplay": true,
            "speed": 800,
            "autoplaySpeed": 7000,
        },
        apiKey: "3881c9135b8befa017c4ec3b4fc8ed83",
        ShowHeaderItem: ''
    }),
    async fetch() {
        let response = await this.$axios.$get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=1`)
        
        this.ShowHeaderItem = response.results
    },
    fetchOnServer: false,
}
</script>