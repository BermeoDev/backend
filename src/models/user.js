const db = require('../config/database');

class user {
    static async create (username, email, password){
        const [result] = await db.execute(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
            [username, email, password]
        );
        return result.insertId;
    }

    static async findByEmail(email){
        const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
        return rows[0];
    }

    static async findById(id){
        const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
        return rows [0];
    }

    static async update(id, {username, email}) {
        await db.execute(
            'UPDATE users SET username = ?, email =? WHERE id =?',
            [username, email, id]            
        );
    }

    static async addFavoritePokemon(userId, pokemonId){
        await db.execute(
            'INSERT INTO favorite_pokemon (user_id, pokemon_id) VALUES (?, ?)',
            [userId, pokemonId]
        )
    }

    static async getFavoritePokemon(userId) {
        const[rows] = await db.execute(
            'SELECT Pokemon_id FROM favorite_pokemon WHERE user_id = ?',
            [userId]
        );
        return rows.map(row => row.pokemon_id);
    }
}

module.exports = user;
