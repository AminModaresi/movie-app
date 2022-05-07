<template>
    <div>
        <div class="shadow py-4 bg-gray text-gray-50">
            <div class="container mx-auto">
                <nav class="flex items-center justify-between">
                    <router-link class="font-bold text-3xl" to="/">
                        M<span class="text-teal">OV</span>ie
                    </router-link>
                    <SearchBox />
                </nav>
            </div>
        </div>
        <Nuxt />
    </div>
</template>

<script>
import SearchBox from "~/components/SearchBox.vue";
export default {
    components: {
        SearchBox
    }
}  
</script>