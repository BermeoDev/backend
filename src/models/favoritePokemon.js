const db = require('../config/database');

class favoritePokemon { 
    static async add(userId, pokemonId){
        await db.execute(
            'INSERT INTO favorite_pokemon (user_id, pokemon_id) VALUES (?, ?)',
            [userId, pokemonId]
        );
    }

    static async remove(userId, pokemonId){
        await db.execute(
            'DELETE FROM favorite_pokemon WHERE user_id = ? AND pokemon_id = ?',
            [userId, pokemonId]
        );
    }

    static async getByUserId(userId){
        const [rows] = await db.execute(
            'SELECT pokemon_id FROM favorite_pokemon WHERE user_id = ?',
            [userId]
        );
        return rows.map(row => row.pokemon_id);
    }

}

module.exports = favoritePokemon;