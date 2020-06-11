const router = require('express').Router();
var Movie = require('../models/movie');

// GET: Devuelve listado de peliculas
router.get('/', (req, res) => {
  Movie.find()
    .then(movies => res.json({
      page: 1,
      total_results: 10,
      total_pages: 1,
      results: movies
    }))
    .catch(err => res.status(400).json({ message: err.message }))
})

// POST: Crear nueva pelicula
router.post('/', async (req, res) => {
  const movie = req.body;
  const newMovie = await new Movie(movie);

  newMovie.save()
    .then((movieSaved) => res.json(movieSaved))
    .catch(err => res.status(400).json({ message: err.message }))
});

// PUT: Actualizar una pelicual dado el id
router.put('/:movie_id', getMovie, async (req, res) => {
  try {
    const updatedMovie = await res.movie.save()
    res.json(updatedMovie)
  } catch {
    res.status(400).json({ message: err.message })
  }
});

// DELETE: Elimina una pelicula dado el Id
router.delete('/:movie_id', getMovie, async (req, res) => {
  try {
    await res.movie.remove();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message })
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
    res.status(error.status_code || 500).json({ message: error.message })
  }
}

module.exports = router;