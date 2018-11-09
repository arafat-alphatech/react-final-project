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
    
      handlePost = () => {
        const self = this;
        let number = this.state.telephone
        number = number.substring(2, number.length)
        // axios
        // .post(
        //   "http://apilayer.net/api/validate?access_key=e015e96242f7db657c2f35fe2936c68c&country_code=ID&format=1&number=" + number,  
        // )
        // .then(result => {
        //   if(result.data.valid){
            
            axios
            .post(
              "http://192.168.43.193:8000/users/register",
                {
                  name: this.state.name,
                  telephone: this.state.telephone,
                  password: this.state.password,
                  address: this.state.address
                }
              )
              .then(result => {
                self.props.history.push("/verify");
                localStorage.setItem("name", this.state.name, )
                localStorage.setItem("telephone", this.state.telephone)
                localStorage.setItem("password", this.state.password)
                localStorage.setItem("address", this.state.address)
                alert("Silahkan verifikasi nomor handphone anda");
              })
              .catch(function(error) {
                console.log(error);
                alert("error");
              });
              
        //   }
        //   else{
        //     alert("Nomor hp tidak valid!");
        //   }
              
        // })
        // .catch(function(error) {
        //   console.log(error);
        //   alert("Error");
        // });




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

									<form className="form-signin" onSubmit={(event) => event.preventDefault()}>
                    <div className="form-label-group">
                        <input name="name" type="text" className="form-control" placeholder="name" required autoFocus onChange={this.HandleName}/>
                    </div>
                    <div className="form-label-group">
                        <input name="telephone" type="text" className="form-control" placeholder="nomor telepon: 628xxxxxxxxxx"  onChange={this.HandleTelp}/>
                    </div>
                    <div className="form-label-group">
                        <input name="password" type="password" className="form-control" placeholder="password" required onChange={this.HandlePassword}/>
                    </div>
                    <div className="form-label-group">
                        <input name="address" type="text" className="form-control" placeholder="alamat" required onChange={this.HandleAddress}/>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block text-uppercase" data-toggle="verifycode" data-target="#verifycode1" onClick={this.handlePost}>Sign up </button >
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
// 6281259162085

// export default SignUp;
export default connect("listBooks, token, is_login, type", actions)(withRouter(SignUp))
