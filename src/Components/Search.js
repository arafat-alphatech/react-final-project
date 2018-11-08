import React from "react";
import { Link } from "react-router-dom";

const Search = props => {
  return (
    <div className="container">
      <div className="col-md-5 mx-auto">
        <div className="input-group input-group-lg">
          <div className="input-group-prepend">
            <span className="input-group-text text-white fa fa-search bg-info" />
          </div>
          <input
            type="text"
            className="form-control"
            name="search"
            id="search"
            value={props.keyword}
            onChange={props.doSearch}
            placeholder="Mau Pinjam Buku Apa..?"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
