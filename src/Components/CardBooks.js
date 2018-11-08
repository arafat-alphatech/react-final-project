import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class CardBooks extends Component {
  render() {
    const route = '/book/' + this.props.id
    return (
      
      <div className="col-sm-3 mt-5">
        <div className="card w-auto">
          <img className="card-img-top " src={this.props.image}
          // style={{width: "300px", height:"225px"  }} 
          />
          <div className="card-body">
            <h5 className="card-title" />
            <p className="text-center">{this.props.title}</p>
            <Link className="btn btn-outline-primary" to={route}>Detail</Link>
            &nbsp;
            <Link className="btn btn-outline-success" to="/">Pinjam</Link>
          </div>
        </div>
      </div>

    );
  }
}

export default CardBooks;
