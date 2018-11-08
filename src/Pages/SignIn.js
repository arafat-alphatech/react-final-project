import React, { Component } from "react";
import { Link, withRouter, Redirect } from 'react-router-dom' 
import axios from "axios";


import { connect } from "unistore/react";
import { actions } from "../store";

class SignIn extends Component {
	state = {
		telephone: "",
		password: ""
	  };
	  changeInput = e => {
		this.setState({ [e.target.name]: e.target.value });
	  };
	  postLogin = () => {
		const { telephone, password } = this.state;
		const data = {
			telephone: telephone,
		  password: password
		};
		const self = this;
		axios
		  .post("http://192.168.43.193:8000/users/login", data)
		  .then(function(response) {
			console.log("ayam", response);
			if (response.data) {
			  localStorage.setItem("token", response.data.token);
				localStorage.setItem("is_login", true);
				
			  self.props.history.push("/bukusaya");
			  alert("Selamat datang");
			} 
		  })
		  .catch(function(error) {
			console.log(error);
			alert("Maaf telepon atau password anda tidak valid");
		  });
	  };
	

	render() {

		if (this.props.is_login){
			return <Redirect to={{pathname: "/"}} />
		} 
		
		return (
	  
	  	<div>
			  
		
			<div className="container">
				<div className="row">
					<div className="col-sm-9 col-md-7 col-lg-5 mx-auto mt-5">
						<div className="card card-signin mt-5">
							<div className="card-body">
								<div className="text-center">  
									<h5 className="card-title" style={{marginTop: 10}}>The Books Signin</h5>
								</div>
								<form className="form-signin" onSubmit={(e) => e.preventDefault()}>
									<div className="form-label-group">
										<input name="telephone" type="text" className="form-control" placeholder="nomor handphone" required autoFocus onChange={(e) => this.changeInput(e)}/>
										</div>
									<div className="form-label-group">
										<input name="password" type="password" className="form-control" placeholder="password" required onChange={(e) => this.changeInput(e)}/>
										{
											this.props.login_failed ?
											<small><i className="text-danger">username atau password anda salah!</i></small>
											:
											""
										}
									</div>
										<Link to="/signin" onClick={() => this.postLogin()} className="btn btn-lg btn-primary btn-block text-uppercase">Sign in</Link>
								</form>
							</div>
							<div className="text-center" style={{marginBottom: 20}}>
								<Link to="/signup">Belum punya akun? Daftar di sini!</Link>
							</div>
						</div>
					</div>
				</div>
			</div>	
		

		</div>
	  );
	}
}

// export default SignIn;
export default connect("listBooks, login_failed, token, is_login, type", actions)(withRouter(SignIn))
