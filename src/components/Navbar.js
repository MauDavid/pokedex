import React, { useState } from "react";

function Navbar(props) {
  const { onSearch } = props;
  const [Search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };
  const onClickBuscarPokemon = async (e) => {
    e.preventDefault();
    onSearch(Search);
  };

  return (
    <div>
      <nav className="navbar bg-transparent">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={onChange}
            />
            <button
              className="btn btn-outline-success"
              onClick={onClickBuscarPokemon}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
