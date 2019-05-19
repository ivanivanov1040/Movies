<template>
  <div>
    <h1 class="alignTitle">Филми</h1>        
    <b-row v-for="i in Math.ceil(movies.length / 2)" v-bind:key="i" class="spaceTop">
      <b-col cols="6" v-for="movie in movies.slice((i - 1) * 2, i *2)" v-bind:key="movie.name">
        <div class="card maxWidth">
          <div class="card-body">
            <h4 class="card-title">{{ movie.name }}</h4>
            <h5 class="card-subtitle mb-2 text-muted">{{ movie.genre }}</h5>
            <p class="card-text">{{ movie.description }}</p>
            <h6 class="card-subtitle mb-2 text-muted">{{ movie.cast }}</h6>
          </div>
        </div>
      </b-col>
    </b-row>
    
  </div>    
</template>

<script>
/* eslint-disable */
import axios from 'axios';
export default {  
  name: 'Movies',
  data() {
    return {
      films: []
    }
  },
  computed:{
    movies () {
      return this.$store.state.movies
    }
  },  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.maxWidth{
  width: 100%;
}

.spaceTop {
  margin-top: 5px;
  margin-bottom: 3px;
}
</style>
