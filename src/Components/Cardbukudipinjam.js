import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Cardbukudipinjam extends Component {

  handleput = id => { 
    let token = localStorage.getItem("token");
    const self = this;
    axios
      .put(
        "http://192.168.43.193:8000/users/request/" + id,
        {
         
            request_status:"true"
        },
        {
          headers: {
            Authorization: "Bearer " + token
          }
        }
      )
      .then(result => {
        self.props.history.push("/bukusaya");
        alert("buku telah dipinjamkan!");
      })
      .catch(function(error) {
        console.log(error);
        alert("error");
      });
  };

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
    const route = '/edit/' + this.props.id

    return (
        
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.category}</td>
        <td>{this.props.condition}</td>
        <td>{this.props.start_date}</td>
        <td>{this.props.end_date}</td>
        <td>{this.props.name}</td>
        <td>
            {/* <button type="button" className="btn btn-sm btn-primary" onClick={ this.handleKembalikan(this.props.req_id) }> Kembalikan </button> */}
        </td>
      </tr>            
                
      
    );
  }
}

export default withRouter (Cardbukudipinjam);
