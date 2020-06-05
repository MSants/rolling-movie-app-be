const mongoose = require('mongoose')

const genreSchema = mongoose.Schema({
    name : {
        type : String,
        requiered : true
    },
})

const Genre = mongoose.model('Genre',genreSchema);

module.exports = Genre;