import Vue from 'vue';
import Router from 'vue-router';
import Films from '../components/films';
import AddMovie from '../components/addmovie'

Vue.use(Router);

const routes = [
    {
        path:'/',
        name:'films',
        components:{
            default: Films
        },
    },
    {
        path:'/addmovie',
        name:'addmovie',
        components:{
            default: AddMovie
        }
    },
];

export default new Router({routes});