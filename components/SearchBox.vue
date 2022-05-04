<template>
    <section class="py-10">
        <div class="container mx-auto">
          <div class="py-5 flex justify-center shadow-lg">
            <input v-model="movieName" type="text" class="border border-gray-300 mr-4 w-1/2 p-4 rounded outline-none text-xl" placeholder="Please Enter Movie Name">
            <button class="border border-green-300 bg-green-400 text-gray-100 rounded p-4 outline-none">
              Search
            </button>
          </div>
        </div>
      </section>
</template>

<script>
export default {
    data : () => ({
      movieName : "",
    }),
    methods : {
      SearchName(){
        
      }
    }
}
</script>