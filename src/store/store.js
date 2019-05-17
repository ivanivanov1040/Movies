import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        movies: []
    },
    mutations: {
        add(state, movie){
            state.movies.push(movie);
        }
    },
    getters: {
        movies: state => state.movies
    }
});