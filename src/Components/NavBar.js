import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { connect } from "unistore/react";
import { actions } from "../store";
import CardBooks from "../Components/CardBooks";
class NavBar extends Component {
  handleLogout = () => {
    this.props.token = "";
    this.props.is_login = false;
    localStorage.removeItem("unistorePersist");
  };

  render() {
    // console.log("is login: ", this.props.is_login)
    return (
      <>
        
		<nav className=" navbar navbar-expand-md navbar-light bg-info ">
          <div className="logo-box">
		  <h1 ><Link to="/" className='text-white'>The Books</Link></h1>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            
            </ul>
			<ul className=" nav navbar-nav  ">
            {/* {this.props.is_login ? (
                "" */}
              {/* ) : ( */}
                <li className="nav-item">
                  <Link to="/signin" className="nav-link text-white">
                    Sign In
                  </Link>
                </li>
              {/* )} */}
              {/* {this.props.is_login ? ( */}
                {/* "" */}
              {/* ) : ( */}
                <li className="nav-item">
                  <Link to="/signup" className="nav-link text-white">
                    Sign Up
                  </Link>
                </li>
              {/* )} */}
              {/* {this.props.is_login ? ( */}
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link text-white"
                    onClick={() => this.handleLogout()}
                  >
                    Sign Out
                  </Link>
                </li>
              {/* ) : (
                ""
              )} */}
          </ul>
          </div>
		  
        </nav>
		<nav className="navbar navbar-expand navbar-light bg-light">
        <ul className=" nav navbar-nav mx-3 ">
          <li className="nav-item  mr-4">
            <Link to='/bukusaya' className="nav-link text-info strong" >
              Buku Saya
            </Link>
          </li>
          <li className="nav-item mr-4">
            <a className="nav-link text-info strong " href="#">
              Permintaan Pinjam
            </a>
          </li>
		  <li className="nav-item mr-4">
            <a className="nav-link text-info strong  " href="#">
              Pinjaman Saya
            </a>
          </li>
		  <li className="nav-item mr-4">
            <a className="nav-link text-info strong  " href="#">
              Pinjaman Anda
            </a>
          </li>
          <li className="nav-item mr-4">
            <a className="nav-link text-info strong " href="#">
              Buku Terpinjam 
            </a>
          </li>
          
        </ul>
        
      </nav>
		
        
      </>
    );
  }
}

// export default NavBar;
export default connect(
  "",
  actions
)(withRouter(NavBar));
