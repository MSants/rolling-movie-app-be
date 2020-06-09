const router = require('express').Router();
var Genero = require('../models/genero');

router.get('/', (req,res) =>{
    Genero.find()
    .then(genero => res.json(genero))
    .catch(err => res.status(400).json(err))
})

router.post('/', async(req,res) =>{
    const generoT = req.body;
console.log(req.body)
    const newGenero = await new Genero(generoT);

    newGenero.save()
    .then((genero) => res.json(genero))
    .catch( err => res.status(400).json('Error: '+ err))
});
module.exports= router;