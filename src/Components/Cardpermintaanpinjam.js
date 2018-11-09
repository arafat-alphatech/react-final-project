import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class Cardpermintaan extends Component {

  handleput = id => { 
    let token = localStorage.getItem("token");
    const self = this;
    axios
      .put(
        "https://54.255.166.203:8000/users/request/" + id,
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
        .delete("https://54.255.166.203:8000/users/request/" + id , { headers })
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
        <td>{this.props.title} </td>
        <td>{this.props.name}</td>
        <td>{this.props.address}</td>
        <td>{this.props.telephone}</td>
        <td className="text-center"> 
          <a className='fa fa-check text-info' onClick={() => this.handleput(this.props.id)}>Pinjamkan</a>
          &nbsp;&nbsp;&nbsp;
          <a className='fa fa-times-circle text-danger' onClick={() => this.handleDelete(this.props.id)}>Batal</a>
       
        </td>

      </tr>                
                
      
    );
  }
}

export default withRouter (Cardpermintaan);
