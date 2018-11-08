import React, { Component } from 'react';
import MainRoute from './Routes/MainRoute';

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
class App extends Component {

  render() {
    return (
      <>
      <NavBar/>
      <MainRoute />
      <Footer/>
    </>
    )
  }
}

export default App;
