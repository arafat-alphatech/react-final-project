import React, { Component } from 'react';
import MainRoute from './Routes/MainRoute';

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
class App extends Component {

  render() {
    return (
      <div style={{paddingBottom:100}}>
        <NavBar/>
        <MainRoute />
        <Footer/>
      </div>
    )
  }
}

export default App;
