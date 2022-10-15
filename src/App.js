import { useState, useEffect } from "react";
import "./App.css";
import { getPokemonData, getPokemons, searchPokemon } from "./hooks/usePokedex";
import Pokedex from "./components/Pokedex";
import Navbar from "./components/Navbar";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [notFound, setnotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(25, 25 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25));
      setnotFound(false);
    } catch (err) {}
  };

  useEffect(() => {
    if (!searching) {
      fetchPokemons();
    }
  }, [page]);

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setnotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setnotFound(true);
      setLoading(false);
      setPokemons([]);
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  };
  return (
    <div className="App">
      <div className="d-flex justify-content-center gy-4 pb-4 pt-4">
        <Navbar onSearch={onSearch} />
      </div>

      {notFound ? (
        <h1>no se encontro pokemon</h1>
      ) : (
        <div className="container">
          <Pokedex
            loading={loading}
            pokemons={pokemons}
            page={page}
            total={total}
            setPage={setPage}
          />
        </div>
      )}
    </div>
  );
}

export default App;
