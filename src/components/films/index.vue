<template>
  <div>
    <h1 class="alignTitle">Филми</h1>
        <div v-for="movie in currMovies" v-bind:key="movie.name">
          {{ movie.name }}
        </div>
  </div>  
</template>

<script>
/* eslint-disable */
import axios from 'axios';
export default {  
  name: 'Movies',
  data(){
    return{
      currMovies: [],
      index:''
    }
  },
  methods:{    
        async getMovies() {
          console.log('vzima');
          const res = await axios.post(            
            'http://localhost:4000/graphql', {
              query: `{
                getMovies {
                  name
                  genre
                  description
                  cast
                }
              }`
            }
          );
          this.films = res.data.data.getMovies;
          
          console.log(this.films);
        }
  },
  created(){
    console.log('rajda');
    this.getMovies();
  },
  // mounted() {
  //   this.getMovies();
  // },
  // beforeCreate() {
  //   getMovies();
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.image{
  width: 200px;
  height: 200px;
  margin-top: 5px;
  margin-right: 5px;
}

img{
  height: 100%;
  max-width: 100%;
  display: block;
  margin: auto;
}

.parrent{
  margin: 2px;
}

.content{
  float: right;
  text-align: left;
}

.card-img-left{
  height: 200px;
  width: 200px;
}

</style>
