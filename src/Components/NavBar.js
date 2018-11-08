import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { connect } from "unistore/react";
import { actions } from "../store";


class NavBar extends Component {

    handleLogout = () => {
        this.props.token = ''
        this.props.is_login= false
        localStorage.removeItem('unistorePersist')
    }

    render() {
        // console.log("is login: ", this.props.is_login)
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <div className="logo-box">
                    <Link to="/">The Books</Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {
                            this.props.is_login ? 
                            ""  
                            :
                            <li className="nav-item">
                                <Link to="/signin" className="nav-link">Sign In</Link>
                            </li> 
                        }
                        {
                            this.props.is_login ? 
                            ""  
                            :
                            <li className="nav-item">
                                <Link to="/signup" className="nav-link">Sign Up</Link>
                            </li>

                        }
                        {
                            this.props.is_login ? 
                            <li className="nav-item">
                                <Link to="/" className="nav-link" onClick={() => this.handleLogout()} >Sign Out</Link>
                            </li>
                            :
                            ""  
                        }
                        {
                            this.props.is_login ?
                            <li className="nav-item">
                                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                            </li>
                            :
                            ""
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}

// export default NavBar;
export default connect("", actions)(withRouter(NavBar))