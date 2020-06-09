const router = require('express').Router();
var Genero = require('../models/genero');

router.route('/').get((req,res) =>{
    Genero.find()
    .then(genero => res.json(genero))
    .catch(err => res.status(400).json(err))
})

router.route('/').post( async(req,res) =>{
    const generoT = req.body;

    const newGenero = await new Genero({generoT});

    newGenero.save()
    .then(() => res.json('Gener Added'))
    .catch( err => res.status(400).json('Error: '+ err))
});
module.exports= router;