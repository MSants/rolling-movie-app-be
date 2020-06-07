const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var generoSchema = new Schema({
    name : {
        type: String,
        required: true
    }  
})

const Genero = mongoose.model('Genero', generoSchema);
 module.exports = Genero;