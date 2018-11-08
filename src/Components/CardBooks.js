import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class CardBooks extends Component {
  render() {
    return (
      
      <div className="col-sm-3 mt-5">
        <div class="card w-auto">
          <img className="card-img-top " src="https://jakmall.id/images/stores/11e6834321155980b3be002590f3b526/uploads/20170712/Tas%20Ransel%20Laptop%20Anti%20Theft%20dengan%20USB%20Charger%201.jpg?ts=1499835204&s=2f8114b8df34c401cb047023d862b239"
          // style={{width: "300px", height:"225px"  }} 
          />
          <div className="card-body">
            <h5 className="card-title" />
            <p className="text-center">Judul</p>
            <hr />
            <p className="text-danger">Detail</p>
            <hr />
            <p className="text-success"> Pinjam Buku</p>

          </div>
        </div>
      </div>

    );
  }
}

export default CardBooks;
