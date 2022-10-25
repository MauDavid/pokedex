import React from "react";
import Pokemon from "./Pokemon";
import Pagination from "./Pagination";
import { SpinningCircles } from "svg-loaders-react";

function Pokedex(props) {
  const { pokemons, loading, page, total, setPage } = props;

  const lastPage = () => {
    const nextPage = Math.max(0, page - 1);
    setPage(nextPage);
  };
  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1);
    setPage(nextPage);
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <Pagination
          page={page + 1}
          totalPages={total}
          onLeftClick={lastPage}
          onRightClick={nextPage}
        />
      </div>
      {loading ? (
        <div className="position-absolute top-50 start-50 translate-middle">
          <SpinningCircles strokeOpacity="1" />
        </div>
      ) : (
        <div className="row d-flex aling-items-center justify-content-center gy-4 pt-4 pb-4 ">
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
