const path = require('path');
const express = require('express');

const indexControllers = require('../controllers/index');
const pokemonControllers = require('../controllers/pokemon');

const router = express.Router();

router.post('/add-pokemon', pokemonControllers.postPokemon);
router.get('/pokemon', pokemonControllers.getPokemon);
router.get('/pokemon/:pokemon', pokemonControllers.getSinglePokemon);

router.get('/404', indexControllers.get404);
router.get('/', indexControllers.getIndex);


 module.exports = router;
