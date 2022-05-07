<template>
    <nuxt-link :to="route" class="block bg-gray text-gray-50">
        <article class="px-6 py-5">
            <div class="w-100">
                <img class="w-100" :src='images' alt="">
            </div>
            <div class="mt-3">
                <p class="truncate text-xl font-bold">{{ title }}</p>
                <div class="mt-2 text-sm">
                    <span class="mr-3">{{ releaseYears }}</span>
                    <span>Vote : {{ vote }}</span>
                </div>
            </div>
        </article>
    </nuxt-link>
</template>
<script>
export default {
    props: {
        id: {
            type: Number,
            require: true,
        },
        title: {
            type: String,
            require: true,
        },
        image: {
            type: String,
            require: true,
        },
        vote: {
            type: Number,
            require: true,
        },
        releaseDate: {
            type: String,
            require: true,
        }
    },
    computed: {
        images() {
            return `https://image.tmdb.org/t/p/w400${this.image}`
        },
        route() {
            return `/movie/${this.id}`
        },
        releaseYears() {
            let date = this.releaseDate.split("-")
            return date[0]
        }
    }
}
</script>