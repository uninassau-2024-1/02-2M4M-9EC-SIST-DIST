const express = require('express');
const axios = require('axios');
const db = require('../config/db');
const router = express.Router();

router.post('/pokemon', async (req, res) => {
    const { query } = req.body;

    if (!query) {
        return res.status(400).json({ error: 'Query é necessária' });
    }

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`);
        const { id, name } = response.data;

        db.query('INSERT INTO pokemon (id, name) VALUES (?, ?) ON DUPLICATE KEY UPDATE name = ?', [id, name, name], (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao salvar no banco de dados' });
            }
            res.json({ id, name });
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar dados da PokeAPI' });
    }
});

module.exports = router;
