import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Cardpermintaan extends Component {
  render() {
  

    return (
        
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.kondisi}</td>
        <td>{this.props.kategori}</td>
        <td>{this.props.pemilik}</td>
        <td className="text-center">
          <a className='fa fa-times-circle text-danger' onClick={() => this.handleDelete(this.props.id)}>Batal</a>
        </td>

      </tr>                
                
      
    );
  }
}

export default withRouter (Cardpermintaan);
