import React, { Component } from "react";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import "../App.css";


class Loading extends Component {
    render() {
      return (
            <div className="conteiner">
                <h1 className="text-center" style={{marginTop: 150}} >Loading ...</h1>
            </div>
      );
    }
}

export default Loading;