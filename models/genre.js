const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var genreSchema = new Schema({
    name : {
        type: String,
        required: true
    }  
})

const Genre = mongoose.model('genre', genreSchema);
 module.exports = Genre;