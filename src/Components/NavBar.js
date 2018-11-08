import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { connect } from "unistore/react";
import { actions } from "../store";

class NavBar extends Component {
  handleLogout = () => {
    localStorage.removeItem("unistorePersist");
    localStorage.removeItem("token");
    localStorage.setItem("is_login", false);
  };

  render() {
    const is_login = localStorage.getItem('is_login') === "true"
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
              {
                is_login ? 
                  ""
                :
                  <li className="nav-item">
                    <Link to="/signin" className="nav-link text-white">
                      Sign In
                    </Link>
                  </li>
              }
              {
                is_login ? 
                  "" 
                :  
                <li className="nav-item">
                  <Link to="/signup" className="nav-link text-white">
                    Sign Up
                    </Link>
                </li>
              } 
              {
                is_login ?  
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link text-white"
                      onClick={() => this.handleLogout()}
                    >
                      Sign Out
                      </Link>
                  </li>
                : 
                  ""
              } 
            </ul>
          </div>

        </nav>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <ul className=" nav navbar-nav mx-3 ">
            <li className="nav-item  mr-4">
              <Link to="/bukusaya" className="nav-link text-info strong">
                <i className="fas fa-book">
                  &nbsp; Buku Saya
            </i>
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link className="nav-link text-info strong " to="/permintaanpinjam">
                <i className="fas fa-arrow-circle-down">
                  &nbsp; Permintaan Pinjam
            </i>
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link className="nav-link text-info strong  " to="/buku-dipinjam">
                <i className="fas fa-arrow-circle-down">
                  &nbsp; Buku Dipinjam
              </i>
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link className="nav-link text-info strong  " to="/permintaansaya">
                <i className="fas fa-arrow-circle-up">
                  &nbsp;Permintaan Saya
            </i>
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link className="nav-link text-info strong " to="/buku-terpinjam">
                <i className="fas fa-arrow-circle-up">
                  &nbsp;Buku Terpinjam
              </i>
              </Link>
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
