const pokemonApiService = require('../services/pokemonApiService');
const user = require('../models/user');

exports.getPokemonList = async (req, res, next) => {
    try {
        const pokemonList = await pokemonApiService.getPokemonList(30);
        res.json(pokemonList);
    } catch (error) {
        next(error);
    }
};

exports.getPokemonDetails = async (req, res, next) => {
    try {
       const {id} = req.params;
       const pokemonDetails = await pokemonApiService.getPokemonDetails(id);
       res.json(pokemonDetails);
    } catch (error) {
        next(error);
    }
};

exports.evolvePokemon = async (req, res, next) => {
    try {
        const {id} = req.params;
        const evolution = await pokemonApiService.getEvolution(id);
        if(!evolution){
            return res.status(400).json({message: 'Este pokemon ya no puede evolucionar'})
        }
        res.json(evolution);
    } catch (error) {
        next(error);
    }
};

exports.addFavoritePokemon = async (req, res, next) => {
    try {
        const {userId} = req.user;
        const {pokemonId} = req.body;
        await user.addFavoritePokemon(userId, pokemonId);
        res.json({message: 'Pokemon añadido a favoritos'});
    } catch (error) {
        next(error);
    }
};


exports.getFavoritePokemon = async (req, res, next) => {
    try {
        const {userId} = req.user;
        const favoritePokemon = await user.getFavoritePokemon(userId);
        res.json(favoritePokemon);
    } catch (error) {
        next(error);
    }
};

