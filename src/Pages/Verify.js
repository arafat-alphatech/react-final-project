import React, { Component } from "react";
import axios from "axios";

import { withRouter} from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class Verify extends Component {
  state = {
    name: localStorage.getItem("name"),
    telephone: localStorage.getItem("telephone"),
    password: localStorage.getItem("password"),
    address: localStorage.getItem("address"),
    verifycode: ""
  };

  changeHandle = (e) => {
      this.setState({ verifycode: e.target.value });
      console.log(e.target.value)
  }

  handlePost = event => {
    event.preventDefault();
    const self = this;
    axios
      .post(
        "http://192.168.43.193:8000/users/register",
        {
          name: this.state.name,
          telephone: this.state.telephone,
          password: this.state.password,
          address: this.state.address,
          verifycode: this.state.verifycode
        }
      )
      .then(result => {
        console.log(result.data.token)
        
        localStorage.setItem("token", result.data.token);
				localStorage.setItem("is_login", true);

        localStorage.removeItem("name")
        localStorage.removeItem("telephone")
        localStorage.removeItem("password")
        localStorage.removeItem("address")

        self.props.history.push("/");
        alert("Verifikasi berhasil");
      })
      .catch(function(error) {
        console.log(error);
        alert("error");
      });
    };
    
    render() {
      
        return (
          <div>
              
          <div className="container" style={{marginTop: 70}}>
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin mt-5">
          <div className="card-body">
            <div className="text-center">  
              <h5 className="card-title">Verifikasi Nomor Handphone</h5>
            </div>

            <form className="form-signin" onSubmit={(event) => event.preventDefault()}>
              <div className="form-label-group">
                  <input name="verifycode" type="text" className="form-control" placeholder="your verifycode" required autoFocus onChange={(e) => this.changeHandle(e)}/>
              </div>
              <button className="btn btn-lg btn-primary btn-block text-uppercase" onClick={this.handlePost}>Verifikasi </button >
            </form>
          </div>
        </div>
      </div>
    </div>
          </div>
      </div>
      );
    }
}

export default connect("listBooks, token, is_login, type", actions)(withRouter(Verify))
