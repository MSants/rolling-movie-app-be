const router = require('express').Router();
var Genre = require('../models/genre');

// Get: Listar todos los generos
router.get('/', (req,res) =>{
    Genre.find()
    .then(genre => res.json(genre))
    .catch(err => res.status(400).json(err))
})

// POST: Crear nuevo genero
router.post('/', async(req,res) =>{
    const genre = req.body;
    const newGenre = await new Genre(genre);

    newGenre.save()
    .then((genre) => res.json(genre))
    .catch( err => res.status(400).json('Error: '+ err))
});

// GET: Ver un genero por id
router.get('/:genreId', getGenre, async (req, res) => {
  const genre = req.genre;
  res.json(genre)
});

// PUT: Actualizar un genero dado el id
router.put('/:genreId', getGenre, async (req, res) =>{
  try {
    const updateGenre = await res.genre.save()
    res.json(updateGenre)
  } catch {
    res.status(400).json({ message: err.message })
  }
})

// DELETE: Eliminar un genero dado el id
router.delete(':genreId', getGenre, async (req, res) => {
  try {
    await req.genre.remove();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

async function getGenre(req, res, next) {
  try {
    genre = await Genre.findById(req.params.genreId);
    if (genre) {
      res.genre = genre;
      next();
    } else {
      throw { message: "genre not found", status_code: 404 }
    }
  } catch (error) {
    console.log(error.message)
    res.status(error.status_code || 500).json({ success: false, message: error.message })
  }
}

module.exports = router;