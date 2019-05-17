import Vue from 'vue';
import Router from 'vue-router';
import Films from '../components/films';
import AddMovie from '../components/addmovie'
import IngameStore from '../components/ingamestore'
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
    {
        path:'/store',
        name:'ingamestore',
        components:{
            default: IngameStore
        }
    }
];

export default new Router({routes});