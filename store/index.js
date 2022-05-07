import Vuex from 'vuex'
const createStore = () => {
    return new Vuex.Store({
        state : {
            apiKey : "3881c9135b8befa017c4ec3b4fc8ed83",
            moviePopularList : [],
            movieListSearch : "",
            movieNameSearch : "",
        },
        mutations : {
            SetPopularListMovie(state, payload) {
                state.moviePopularList = payload;
            },
            SearchMovieName(state, payload) {
                state.movieListSearch = payload;
            },
            movieNameSearch(state , payload) {
                state.movieNameSearch = payload;
            }
        },
        actions : {
            async nuxtServerInit({ commit }){
                try{
                    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.state.apiKey}&language=en-US&page=1`)
                    const data = await response.json()
                    commit('SetPopularListMovie', data.results)
                }catch(error){
                    console.log("error")
                }
            },
            SearchMovieName({ commit , state} , payload){
                this.$axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${state.apiKey}&query=${payload}`)
                .then(response => {
                    return response.data.results
                }).then(data => {
                    let datas = data.filter(item => item.backdrop_path !== null)
                    commit('SearchMovieName', datas)
                    commit("movieNameSearch" , payload)
                })
            }
        },
        getters : {
            ShowPopularListMovie(state){
                return state.moviePopularList
            },
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