import Vuex from 'vuex'
const createStore = () => {
    return new Vuex.Store({
        state : {
            apiKey : "3881c9135b8befa017c4ec3b4fc8ed83",
            movieList : [],
        },
        mutations : {
            SetListMovie(state, payload) {
                state.movieList = payload;
            }
        },
        actions : {
            async nuxtServerInit({ commit }){
                try{
                    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.state.apiKey}&language=en-US&page=1`)
                    const data = await response.json()
                    commit('SetListMovie', data.results)
                }catch(error){
                    console.log("error")
                }
            },
            SearchMovieName({ commit , state} , payload){
                this.$axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${state.apiKey}&query=${payload}`)
                .then(response => {
                    console.log(response.data.results);
                })
            }
        },
        getters : {
            ShowListMovie(state){
                return state.movieList
            }
        }
    })
}

export default createStore