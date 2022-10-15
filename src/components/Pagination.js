import React from "react";

function Pagination(props) {
  const { onLeftClick, onRightClick, page, totalPages } = props;
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-primary" onClick={onLeftClick}>
        ⬅️
      </button>
      <button className="btn btn-primary">
        {page} de {totalPages}
      </button>
      <button type="button" className="btn btn-primary" onClick={onRightClick}>
        ➡️
      </button>
    </div>
  );
}

export default Pagination;
