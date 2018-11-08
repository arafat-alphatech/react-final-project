import React, { Component } from "react";
import {Link, withRouter} from "react-router-dom";
import axios from "axios";

import { connect } from "unistore/react";
import { actions } from "../store";

class SignUp extends Component{
    state = {
        name: "",
        telephone: "",
        password: "",
        address:""
      };
      
      HandleName = event => {
        this.setState({ name: event.target.value });
      };
      HandleTelp = event => {
        this.setState({ telephone: event.target.value });
      };
      HandlePassword = event => {
        this.setState({ password: event.target.value });
      };
      HandleAddress = event => {
        this.setState({ address: event.target.value });
      };
    
      handlePost = event => {
        event.preventDefault();
        const self = this;
        axios
          .post(
            "http://192.168.43.240:8000/users/register",
            {
              name: this.state.name,
              telephone: this.state.telephone,
              password: this.state.password,
              address: this.state.address,
            
            }
          )
          .then(result => {
            this.props.token = result.data.token
            this.props.is_login = true
            self.props.history.push("/");
            alert("sucess");
          })
          .catch(function(error) {
            console.log(error);
            alert("error");
          });
      };

    render(){
        return (
            <div>

              
                <div className="container" style={{marginTop: 70}}>
					<div className="row">
						<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
							<div className="card card-signin mt-5">
								<div className="card-body">
									<div className="text-center">  
										<h5 className="card-title">The Books Signup</h5>
									</div>

									<form className="form-signin" onSubmit={this.handlePost}>
                                        <div className="form-label-group">
                                            <input name="name" type="text" className="form-control" placeholder="name" required autoFocus onChange={this.HandleName}/>
                                        </div>
                                        <div className="form-label-group">
                                            <input name="telephone" type="text" className="form-control" placeholder="nomor telepon"  onChange={this.HandleTelp}/>
                                        </div>
                                        <div className="form-label-group">
                                            <input name="password" type="password" className="form-control" placeholder="password" required onChange={this.HandlePassword}/>
                                        </div>
                                        <div className="form-label-group">
                                            <input name="address" type="text" className="form-control" placeholder="alamat" required onChange={this.HandleAddress}/>
                                        </div>
                                        <button className="btn btn-lg btn-primary btn-block text-uppercase" >Sign up </button >
									</form>
								</div>
								<div className="text-center" style={{marginBottom: 20}}>
									<Link to="/signin">Sudah punya akun? Signin di sini</Link>
								</div>
							</div>
						</div>
					</div>
                </div>
               
            </div>
        )
    }
}

// export default SignUp;
export default connect("listBooks, token, is_login, type", actions)(withRouter(SignUp))
