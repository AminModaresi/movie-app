import Vuex from 'vuex'
const createStore = () => {
    return new Vuex.Store({
        state : {
            apiKey : "3881c9135b8befa017c4ec3b4fc8ed83",
            movieListSearch : "",
            movieNameSearch : "",
        },
        mutations : {
            SearchMovieName(state, payload) {
                state.movieListSearch = payload;
            },
            movieNameSearch(state , payload) {
                state.movieNameSearch = payload;
            }
        },
        actions : {
            // async nuxtServerInit({ commit }){
                
            // },
            SearchMovieName({ commit , state} , payload){
                this.$axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${state.apiKey}&query=${payload}`)
                .then(response => {
                    return response.data.results
                }).then(data => {
                    let datas = data.filter(item => item.poster_path !== null)
                    commit('SearchMovieName', datas)
                    commit("movieNameSearch" , payload)
                })
            }
        },
        getters : {
            ShowSearchMovieList(state){
                return state.movieListSearch
            },
            ShowMovieNameSearch(state){
                return state.movieNameSearch
            }
        }
    })
}

export default createStore