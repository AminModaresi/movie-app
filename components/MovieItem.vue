<template>
    <div class="col-span-3">
        <nuxt-link :to="'/'" class="block border-gray-300 border">
            <article>
                <div class="w-100 relative">
                    <img class="w-100" :src='images' alt="">
                    <p class="text-sm absolute top-0 left-0 py-2 p-4 bg-green-600 rounded-br-2xl">Vote : {{ vote }}</p>
                </div>
                <div class="py-4 px-5">
                    <p class="text-xl truncate">{{ title }}</p>
                </div>
            </article>
        </nuxt-link>
    </div>
</template>
<script>
export default {
    props : {
        id : {
            type : Number,
            require : true,
        },
        title : {
            type : String,
            require : true,
        },
        image : {
            type : String,
            require : true,
        },
        vote : {
            type : Number,
            require : true,
        }
    },
    computed: {
        images() {
            return `https://image.tmdb.org/t/p/w400${this.image}`
        }
    }
}
</script>