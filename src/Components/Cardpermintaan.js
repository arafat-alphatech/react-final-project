import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Cardpermintaan extends Component {
  handleDelete = id => { 

    let token = localStorage.getItem("token");
    const self = this;
    const headers = {
        Authorization: "Bearer " + token
    } 
    axios
        .delete("http://192.168.43.193:8000/users/request/" + id , { headers })
        .then(result => {
            alert("cancel sucess")
             self.props.history.replace("/bukusaya");
        })
        .catch(function (error) {
            console.log(error)
            alert('error')
        })

}
  render() {
  

    return (
        
      <tr>
        
        <td>{this.props.title} {this.props.id}</td>
        <td>{this.props.kondisi}</td>
        <td>{this.props.kategori}</td>
        <td>{this.props.pemilik}</td>
        <td className="">
          <a className='fa fa-times-circle text-danger' onClick={() => this.handleDelete(this.props.id)}>Batal</a>
        </td>

      </tr>                
                
      
    );
  }
}

export default withRouter (Cardpermintaan);
