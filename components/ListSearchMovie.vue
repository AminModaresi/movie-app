<template>
    <section class="py-10">
        <div class="container mx-auto">
            <p class="text-4xl font-bold text-center mb-10">{{ ShowMovieNameSearch }}</p>
            <div class="grid grid-cols-12 gap-10">
                <MovieItem v-for="movieItem in ShowSearchMovieList" :key="movieItem.id" :id="movieItem.id" :title="movieItem.original_title" :image="movieItem.backdrop_path" :vote="movieItem.vote_average"/>
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