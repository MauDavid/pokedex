import React from "react";

function Pokemon({ pokemon }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <h5 className="card-title text-center">{pokemon.id}</h5>
      <img
        src={pokemon.sprites.front_default}
        className="card-img-top"
        alt={pokemon.name}
      ></img>
      <div className="card-body">
        <p className="card-text">{pokemon.name}</p>
      </div>
    </div>
  );
}

export default Pokemon;
