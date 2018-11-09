import React , { Component } from "react";

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class Search extends Component {

  doSearch = (e) => {
    this.props.handleSearch(e.target.value)
  }

  render() {

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
              onChange={(e) => this.doSearch(e)}
              placeholder="Mau Pinjam Buku Apa..?"
              />
          </div>
        </div>
      </div>
    );
  };
}

export default connect("listBooks", actions)(withRouter(Search))
