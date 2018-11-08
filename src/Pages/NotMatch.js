import React, { Component } from "react";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import notFound from "../notFound.jpg"
import "../App.css";


class NotMatch extends Component {
    render() {
      return (
          <div>
              <NavBar />
              <div className="container testing-purpose">
                <div className="text-center" style={{marginTop: 150}}>
                    <img alt="not found" src={notFound}/>
                </div>
              </div>
              <Footer />
          </div>
      );
    }
}

export default NotMatch;