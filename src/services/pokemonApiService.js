const axios = require('axios');

const BASE_URL = 'https://pokeapi.co/api/v2';

exports.getPokemonList = async(limit = 30) => {
    const reponse = await axios.get(`${BASE_URL}/pokemon?limit=${limit}`);
    return response.data.results;
};

exports.getPokemonDetails = async (id) => {
    const response = await axios.get(`${BASE_URL}/pokemon/${id}`);
    return {
        id: response.data.id,
        name: response.data.name,
        types: response.data.types.map(type => type.type.name),
        abilities: response.data.abilities.map(ability,ability.name),
        stats: response.data.stats.map(stat => ({
            name: stat.stat.name,
            value: stat.base_stat
        })),
        image: response.data.sprites.front_default
    };
};


exports.getEvolution = async(id) => {
    const speciesResponse = await axios.get(`${BASE_URL}/pokemon-species//${id}`);
    const evolutionChainUrl = speciesResponse.data.evolution_chain.url;
    const evolutionResponse = await axios.get(evolutionChainUrl);
    
    let evolution = evolutionResponse.data.chain;
    while (evolution.species.name !== speciesResponse.data.name && evolution.evolves_to.length > 0 ){
        evolution = evolution.evolves_to[0];
    }

    if(evolution.evolves_to.length > 0){
        const nextEvolution = evolution.evolves_to[0].species.name;
        const nextEvolutionDetails = await this.getPokemonDetails(nextEvolution);
        return nextEvolutionDetails;
    }

    return null;
};

