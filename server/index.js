const express = require('express');
const { graphql, buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const Movie = require('./movie');
const schema = buildSchema(`
    type Query {
        getMovies: [Movie]
    }

    type Mutation {
        addMovie(name: String!, genre: String!, description: String!, cast: String!): Movie
    }

    type Movie {
        name: String
        genre: String
        description: String
        cast: String
    }
`);

const movies = [
    new Movie('Avengers: Endgame',
        'Action, Adventure, Fantasy, Superhero, Science fiction',
        'Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.',
        'Robert Downey, Jr., Chris Evans, Scarlett Johansson and MORE',
        '2019')
];

const rootValue = {
    getMovies: () => movies,
    addMovie: ({name, genre, description, cast}) => {
        const movie = new Movie();
        movie.name = name;
        movie.genre = genre;
        movie.description = description;
        movie.cast = cast;
        return movie;
    }
};

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
    rootValue, schema, graphiql: true
}));

app.listen(4000, () => console.log("listening on port 4000"));