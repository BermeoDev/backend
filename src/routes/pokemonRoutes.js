const express = require('express');
const {getPokemonList, getPokemonDetails, evolvePokemon, addFavoritePokemon, getFavoritePokemon} = require('../controllers/pokemonController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/list', getPokemonList);
router.get('/:id', getPokemonDetails);
router.post('/:id/evolve', evolvePokemon);
router.post('/favorite', authMiddleware, addFavoritePokemon);
router.get('/favorite', authMiddleware, getFavoritePokemon);

module.exports = router;
