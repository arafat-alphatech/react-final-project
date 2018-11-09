import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Cardpermintaan extends Component {
  render() {
    const route = '/edit/' + this.props.id

    return (
        
      <tr>
        <td>{this.props.title} </td>
        <td>{this.props.name}</td>
        <td>{this.props.address}</td>
        <td>{this.props.telephone}</td>
        <td className="text-center"> 
          <a className='fa fa-times-circle text-danger' onClick={() => this.handleDelete(this.props.id)}>Batal</a>
        </td>

      </tr>                
                
      
    );
  }
}

export default withRouter (Cardpermintaan);
