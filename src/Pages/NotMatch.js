import React, { Component } from "react";


import notFound from "../notFound.jpg"
import "../App.css";


class NotMatch extends Component {
    render() {
      return (
          <div>
            
              <div className="container testing-purpose">
                <div className="text-center" style={{marginTop: 150}}>
                    <img alt="not found" src={notFound}/>
                </div>
              </div>
            
          </div>
      );
    }
}

export default NotMatch;