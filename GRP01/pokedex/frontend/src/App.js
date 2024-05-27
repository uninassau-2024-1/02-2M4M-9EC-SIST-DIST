import React, { useState } from 'react';
import axios from 'axios';
import styles from './App.module.scss';

function App() {
    const [query, setQuery] = useState('');
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await axios.post('http://localhost:3001/api/pokemon', { query });
            setPokemon(response.data);
            setError(null);
        } catch (err) {
            setError('Erro ao buscar dados do Pokémon.');
            setPokemon(null);
        }
    };

    return (
        <div className={styles.container}>
            <h1>Busca de Pokémon</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Digite o ID ou Nome do Pokémon"
                className={styles.input}
            />
            <button onClick={handleSearch} className={styles.button}>Buscar</button>

            {pokemon && (
                <div className={styles.pokemon}>
                    <h2>Pokémon Encontrado</h2>
                    <p>ID: {pokemon.id}</p>
                    <p>Nome: {pokemon.name}</p>
                </div>
            )}

            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
}

export default App;
