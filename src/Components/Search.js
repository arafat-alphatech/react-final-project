import React from "react";
import { Link } from "react-router-dom";

const Search = props => {
  return (
    <div className="container">
      <div class="col-md-5 mx-auto">
        <div class="input-group input-group-lg">
          <div class="input-group-prepend">
            <span class="input-group-text text-white fa fa-search bg-info" />
          </div>
          <input
            type="text"
            class="form-control"
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
