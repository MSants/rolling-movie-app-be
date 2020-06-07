const express = require('express');
const app = express()
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const Genero= require('./models/genero');
const Movie = require('./models/movie');


 const URI = process.env.DATABASE_URL || 'mongodb://localhost/rolling-movie-app';

 mongoose.connect(URI, {useNewUrlParser : true, useUnifiedTopology: true})
 const db= mongoose.connection
 db.on('error',(error) => console.error(error))
 db.once('open', () => console.log('connected to database'))


// settings
app.set('port', process.env.PORT || 3000);

// middleware
app.use(bodyParser.urlencoded({extended:false }))
app.use(bodyParser.json())

// routes
// app.get('/genero', async (req,res) =>{
//     try{
//         const genero = new Genero.find()
//         res.json(genero)

//     }catch (erro){
//         res.status(500).json({message: err.message})
//     }
//     });

// app.post('/genero', async(req,res)=>{
//     const {name} = req.body;
//     const gener=new Genero({name});
//     await gener.save();
//     res.json({status : 'Saved'})
// })

const generosRouter = require('./routes/generos')
// const moviesRouter = require('./routes/movies')

app.use('/generos', generosRouter);
// app.use('/movies', moviesRouter);

// NOTA PARA PUSH DE GENROOOSSS
// NOTA! Crear y guardar genero, buscar la pelicula, asignarle el genero atraves "movies.save.push()genero"

// starting server
app.listen(app.get('port'), () => console.log(`Server on port ${app.get('port')}`))