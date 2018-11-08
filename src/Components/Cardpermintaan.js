import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Cardpermintaan extends Component {
  render() {
    const route = '/edit/' + this.props.id

    return (
        
      <tr>
        <td>{this.props.key}</td>
        <td>{this.props.judul}</td>
        <td>{this.props.author}</td>
        <td>{this.props.kategori}</td>
       
        <td>{this.props.kondisi}</td>
        <td className="text-center"> 
          
          <a className='fa fa-times-circle text-danger' onClick={() => this.handleDelete(this.props.id)}>Batal</a>
        </td>

      </tr>                
                
      
    );
  }
}

export default withRouter (Cardpermintaan);
