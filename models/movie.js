const mongoose = require('mongoose')
const movieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    synopsis: {
        type: String,
        required: true
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
        required: true
    },
    actors: {
        type: Array
    }
})

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;