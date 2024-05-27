// backend/server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const pokemonRouter = require('./routes/pokemon');
require('dotenv').config();
const db = require('./config/db');

// Middleware para parsear JSON
app.use(express.json());

// Rotas
app.use('/api', pokemonRouter);

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
