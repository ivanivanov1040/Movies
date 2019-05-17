<template>
  <div>
    <b-container>
    <b-row>
      <b-col cols="12" class="alignTitle">
        <h3>Добави филм</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="4" class="alignText">
        <label>Въведете име:</label>
      </b-col>
      <b-col cols="8">
        <input type="text" class="form-control" v-model="name">
      </b-col>      
    </b-row>
    <b-row>
      <b-col cols="4" class="alignText">
        <label>Въведете жанр:</label>
      </b-col>
      <b-col cols="8">
        <input type="text" class="form-control" v-model="genre">
      </b-col>      
    </b-row>
    <b-row>
      <b-col cols="4" class="alignText">
        <label>Въведете описание:</label>
      </b-col>
      <b-col cols="8">
        <textarea class="form-control" rows="4" v-model="description"></textarea>      
      </b-col>      
    </b-row>
    <b-row>
      <b-col cols="4" class="alignText">
        <label>Въведете актьори:</label>
      </b-col>
      <b-col cols="8">
        <input type="text" class="form-control" v-model="cast">
      </b-col>      
    </b-row>
    <button @click="addMovie" class="btn btn-primary">Въведи филм</button>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';

export default {
  name: 'AddMovie',
  data(){
    return{      
      name: '',
      genre: '',
      description: '',
      cast: '',
    }
  },  
  methods:{
    async addMovie(){
      console.log('rajda');
      const res = await axios.post('http://localhost:4000/graphql', {
        query: `
          mutation AddMovie($name: String!, $genre: String!, $description: String!, $cast: String!){
            addMovie(name: $name, genre: $genre, description: $description, cast: $cast){
              name
              genre
              description
              cast
            }
          }
        `,
        variables: {
          name: this.name,
          genre: this.genre,
          description: this.description,
          cast: this.cast,
        }
      })
      this.$store.commit('add', res.data.data.addMovie)
      console.log(this.$store.state.movies);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alignText{
  text-align: right;
}

b-col.span{
  text-align: right;
}
.alignTitle{
  text-align: center;
}
.spanAlign{
  float: right;
}
.card-img-left{
  height: 100px;
  width: 100px;
}
</style>
