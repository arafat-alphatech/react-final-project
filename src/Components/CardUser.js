import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class CardUser extends Component {
  handleDelete = id => { 

    let token = localStorage.getItem("token");
    const self = this;
    const headers = {
        Authorization: "Bearer " + token
    } 
    axios
        .delete("http://192.168.43.240:8000/books/" + id , { headers })
        .then(result => {
            alert("delete sucess")
             self.props.history.replace("/");
        })
        .catch(function (error) {
            console.log(error)
            alert('error')
        })

}
  render() {
    const route = '/edit/' + this.props.id

    return (
        
      <tr>
        <td>{this.props.key}</td>
        <td>{this.props.judul}</td>
        <td>{this.props.author}</td>
        <td>{this.props.kategori}</td>
        <td>{this.props.kondisi}</td>
        <td>{this.props.kondisi}</td>
        <td className="text-center"> 
          <Link className='fa fa-edit text-warning' to={route}></Link>
          &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
          <a className='fa fa-trash text-danger' onClick={() => this.handleDelete(this.props.id)}></a>
        </td>

      </tr>                
                
      
    );
  }
}

export default withRouter (CardUser);
