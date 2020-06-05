// En la carpeta models (si no esta, crearla) crear un archivo que se llama movie.js.
// Este archivo debera contener la definicion del modelo Movie y el schema de mongo.
// El schema es el siguiente:
// title: string y requerido
// synopsis: string y requerido
// genres: Array
// homepage: string
// poster_url: string
// director: string y requerido
// actors: Array de strings.

const mongoose = require('mongoose')
var Genre = mongoose.Schema('Genre')

const movieSchema = mongoose.schema({
    title:{
        type : String,
        require : true
    },
    synopsis:{
        type : String,
        require: true
    },
    genres:[ {
        type: Schema.ObjectId,
        ref: "Genre"

    }],
    homepage :{
        type : String
    },
    poster_url:{
        type : String
    },
    director:{
        type: String,
        require: true
    },
    actors:{
        type: [String]
    }
})

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;