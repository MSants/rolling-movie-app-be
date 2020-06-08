const router = require('express').Router();
var Genero = require('../models/movie');

router.get('/', req,res =>{
    Movie.find()
    .then(movies => res.json(movies))
    .catch(err => res.status(400).json(err))
})

router.post('/', async(req,res) =>{
    const movie = req.body;

    const newMovie = await new Movie({movie});

    newMovie.save()
    .then((movie) => res.json(movie))
    .catch( err => res.status(400).json('Error: '+ err))
});

router.put('/:movie_id', getMovie, async (req, res) => {
  try {
    const updatedMovie = await res.movie.save()
    res.json(updatedMovie)
  } catch {
    res.status(400).json({ message: err.message })
  }
});

router.delete('/:movie_id', getMovie, async (req, res) => {
  try {
    await res.movie.remove();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({success: false, message: error.message})
  }
});

async function getMovie(req, res, next) {
    try {
        movie = await Movie.findById(req.params.movie_id);
        if (movie) {
          res.movie = movie;
          next();
        } else {
          throw { message: "movie not found", status_code: 404 }
        }
      } catch (error) {
        console.log(error.message)
        res.status(error.status_code || 500).json({ success: false, message: error.message })
      }
}

module.exports= router;