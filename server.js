const express = require('express');
const app = express()
const bodyParser= require('body-parser');
const mongoose = require('mongoose');

const URI = process.env.DATABASE_URL || 'mongodb://localhost/rolling-movie-app';

 mongoose.connect(URI, {useNewUrlParser : true, useUnifiedTopology: true})
 const db= mongoose.connection
 db.on('error',(error) => console.error(error))
 db.once('open', () => console.log('connected to database'))

// settings
app.set('port', process.env.PORT || 3001);

// middleware
app.use(bodyParser.urlencoded({extended:false }))
app.use(bodyParser.json())

const genresRouter = require('./routes/genres')
const moviesRouter = require('./routes/movies')

app.use('/genres', genresRouter);
app.use('/movies', moviesRouter)

// NOTA PARA PUSH DE GENROOOSSS
// NOTA! Crear y guardar genero, buscar la pelicula, asignarle el genero atraves "movies.save.push()genero"

// starting server
app.listen(app.get('port'), () => console.log(`Server on port ${app.get('port')}`))