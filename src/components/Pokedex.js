import React from "react";
import Pokemon from "./Pokemon";

function Pokedex(props) {
  const { pokemons, loading } = props;
  return (
    <div>
      <h1>Pokedex</h1>
      {loading ? (
        <h1>Cargando Pokemons</h1>
      ) : (
        <div className="row">
          {pokemons.map((pokemon) => {
            return (
              <div className="col" key={pokemon.name}>
                <Pokemon pokemon={pokemon} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Pokedex;
