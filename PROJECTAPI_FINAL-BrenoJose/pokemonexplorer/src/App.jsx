import React, { useState } from 'react';
import { Pokedex } from 'pokeapi-js-wrapper';
import NewsPage from './components/NewsPage'; // Certifique-se de que o caminho está correto
import './App.css';

const typeColors = {
  fire: 'linear-gradient(135deg, #FF9966, #FF5E62)',
  water: 'linear-gradient(135deg, #56CCF2, #2F80ED)',
  grass: 'linear-gradient(135deg, #9BC53D, #88B04B)',
  electric: 'linear-gradient(135deg, #F7B801, #FFD23F)',
  ice: 'linear-gradient(135deg, #76E2F4, #4DD0E1)',
  fighting: 'linear-gradient(135deg, #D7263D, #FF6F61)',
  poison: 'linear-gradient(135deg, #9B59B6, #8E44AD)',
  ground: 'linear-gradient(135deg, #D4A373, #C0A080)',
  flying: 'linear-gradient(135deg, #83A4D4, #A8C0FF)',
  psychic: 'linear-gradient(135deg, #FC466B, #3F5EFB)',
  bug: 'linear-gradient(135deg, #A8D08D, #519C6B)',
  rock: 'linear-gradient(135deg, #D7CCC8, #A1887F)',
  ghost: 'linear-gradient(135deg, #6A4C93, #301934)',
  dragon: 'linear-gradient(135deg, #1A2A6C, #B21F1F, #FDBB2D)',
  dark: 'linear-gradient(135deg, #4B4B4B, #2C3E50)',
  steel: 'linear-gradient(135deg, #7F8C8D, #BDC3C7)',
  fairy: 'linear-gradient(135deg, #FEC5BB, #FFB7C5)',
  default: 'linear-gradient(135deg, #FFFFFF, #CCCCCC)',
};

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState('home');

  const pokedex = new Pokedex();

  const handleSearch = async () => {
    try {
      const data = await pokedex.getPokemonByName(searchTerm.toLowerCase());
      setPokemonData(data);
      setError('');
    } catch (err) {
      setError('Pokémon not found');
      setPokemonData(null);
    }
  };

  const getTypeColor = (types) => {
    if (!types || types.length === 0) return typeColors.default;
    return typeColors[types[0].type.name] || typeColors.default;
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="main-content" style={{ background: pokemonData ? getTypeColor(pokemonData.types) : typeColors.default }}>
            <p>Welcome to Pokémon Explorer, your one-stop destination for all things Pokémon. Use the search bar below to find detailed information about any Pokémon or explore the latest news related to the Pokémon universe.</p>
            <input
              type="text"
              placeholder="Search for a Pokémon by name or number"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {pokemonData && (
              <div className="pokemon-info">
                <h2>{pokemonData.name}</h2>
                <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                <p>Height: {pokemonData.height}</p>
                <p>Weight: {pokemonData.weight}</p>
                <p>Type: {pokemonData.types.map(type => type.type.name).join(', ')}</p>
                <p>Abilities: {pokemonData.abilities.map(ability => ability.ability.name).join(', ')}</p>
              </div>
            )}
          </div>
        );
      case 'news':
        return <NewsPage />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Pokémon Explorer</h1>
        <p>Your gateway to exploring the world of Pokémon!</p>
      </header>
      <nav>
        <a href="#" onClick={() => setCurrentPage('home')}>Home</a>
        <a href="#" onClick={() => setCurrentPage('news')}>News</a>
        <a href="#">About</a>
      </nav>
      {renderContent()}
    </div>
  );
}

export default App;
