const path = require('path');
const express = require('express');

const indexControllers = require('../controllers/index');
const pokemonControllers = require('../controllers/pokemon');

const router = express.Router();

router.post('/add-pokemon', pokemonControllers.postPokemon);
router.post('/edit-pokemon', pokemonControllers.editPokemon);
router.post('/delete-pokemon', pokemonControllers.deletePokemon);

router.get('/edit-pokemon', pokemonControllers.getEditPokemon);
router.get('/pokemon/:pokemon', pokemonControllers.getSinglePokemon);
router.get('/404', indexControllers.get404);
router.get('/', indexControllers.getIndex);



 module.exports = router;
