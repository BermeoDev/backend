require('dotenv').config();
const express = require('express');
const cors = require ('cors');
const morgan = require('morgan');
const {errorHandler} = require ('./src/utils/errorHandler');
const authRoutes = require('./src/routes/authRoutes');
const pokemonRoutes = require('./src/routes/pokemonRoutes');
const userRoutes = require('./src/routes/userRoutes')

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenido al servidor de Pokémon');
});

app.use('/api/auth', authRoutes);
app.use('api/pokemon', pokemonRoutes);
app.use('api/user', userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});

app.listen(4000, '0.0.0.0', () => {
    console.log('Servidor corriendo en http://0.0.0.0:4000/');
  });


module.exports = app;

