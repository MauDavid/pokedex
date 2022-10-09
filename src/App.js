import { useState, useEffect } from "react";
import "./App.css";
import { getPokemonData, getPokemons } from "./hooks/usePokedex";
import Pokedex from "./components/Pokedex";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPokemons = async () => {
    setLoading(true);
    const data = await getPokemons();
    const promises = data.results.map(async (pokemon) => {
      return await getPokemonData(pokemon.url);
    });
    const results = await Promise.all(promises);
    setPokemons(results);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>hola david</h1>
        {loading ? (
          <h1>Cargando Pokemons</h1>
        ) : (
          <Pokedex loading={loading} pokemons={pokemons} />
        )}
      </header>
    </div>
  );
}

export default App;
