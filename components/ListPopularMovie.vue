<template>
    <section class="py-10">
        <div class="container mx-auto">
            <p class="text-4xl font-bold text-center mb-10">Popular Movie</p>
            <div class="grid grid-cols-12 gap-10">
                <MovieItem v-for="movieItem in ShowListMovie" :key="movieItem.id" :id="movieItem.id" :title="movieItem.original_title" :image="movieItem.backdrop_path" :vote="movieItem.vote_average"/>
            </div>
        </div>        
    </section>
</template>

<script>
import MovieItem from "~/components/MovieItem.vue";
export default {
    components : { MovieItem },
    computed : {
        ShowListMovie(){
            return this.$store.getters.ShowListMovie
        }
    }
}
</script>