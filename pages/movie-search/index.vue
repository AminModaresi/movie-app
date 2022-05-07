<template>
    <section class="py-10">
        <div class="container-fluid" v-if="ShowMovieNameSearch">
            <p class="text-4xl font-bold mb-10 ml-5 text-gray-50 relative title">{{ ShowMovieNameSearch }}</p>
            <div class="grid grid-cols-12 gap-10">
                <div v-for="movieItem in ShowSearchMovieList" :key="movieItem.id" class="col-span-2">
                 <MovieItem  :id="movieItem.id" :title="movieItem.original_title" :image="movieItem.poster_path" :vote="movieItem.vote_average"  :release-date="movieItem.release_date"/>
                </div>
            </div>
        </div>   
    </section>
</template>

<script>
export default {
    computed : {
        ShowSearchMovieList(){
            return this.$store.getters.ShowSearchMovieList
        },
        ShowMovieNameSearch(){
            return this.$store.getters.ShowMovieNameSearch
        }
    }
}
</script>