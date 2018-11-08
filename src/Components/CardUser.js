import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class CardUser extends Component {
  handleDelete = event => { 
    this.setState({ id: event.target.value })
    let token = localStorage.getItem("token");
    const self = this;
    const headers = {
        Authorization: "Bearer " + token
    } 
    axios
        .delete("http://0.0.0.0:8000/user/item/"+event.target.value, { headers })
        .then(result => {
            alert("delete sucess")
             self.props.history.replace("/profile");
        })
        .catch(function (error) {
            console.log(error)
            alert('error')
        })

}
  render() {
    return (
      // <div>
        
                <><tr>
                 <td>{this.props.key}</td>
                <td>{this.props.nama}</td>
                <td>{this.props.price}</td>
                <td>{this.props.qty}</td>
                <td>{this.props.desc}</td>
                <td className='fa fa-edit text-warning'> Edit</td>
                <td className='fa fa-trash text-danger'><input type="button" value={this.props.id} onClick={this.handleDelete}></input></td>
                </tr>                </ >
                
        // </div>   
      
    );
  }
}

export default withRouter (CardUser);
