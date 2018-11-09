import React, { Component } from "react";

import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class CardBooks extends Component {
  render() {
    const route = '/book/' + this.props.id
    return (
      
      <div className="col-sm-3 mt-5">
        <div className="card w-auto">
          <img alt="gambar buku" className="card-img-top " src={this.props.image}
          // style={{width: "300px", height:"225px"  }} 
          />
          <div className="card-body">
            <p className="text-center">{this.props.title}</p>
            <Link className="btn btn-outline-primary" to={route}>Detail</Link>
            &nbsp;
            <Link className="btn btn-outline-success" to="/" onClick={() => this.props.handlePinjam(this.props.id, this.props.owner_id)} >Pinjam</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect("listBooks", actions)(withRouter(CardBooks))
