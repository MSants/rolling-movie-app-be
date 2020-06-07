const mongoose = require('mongoose')
const movieSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    synopsis: {
        type: String,
        require: true
    },
    genres: {
        type: Array
    },
    homepage: {
        type: String
    },
    poster_url: {
        type: String
    },
    director: {
        type: String,
        require: true
    },
    actors: {
        type: Array
    }
})

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;