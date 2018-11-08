import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Link } from "react-router-dom";
import Cardbuku from "../Components/Cardbuku";
import { Redirect } from "react-router-dom";


const getAllAdmin = "http://0.0.0.0:8000/user/item";

class BukuSaya extends Component {
  state = {
    ListUser: []
  };

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    const self = this;
    axios
      .get(getAllAdmin, {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then(function(response) {
        // handle success
        self.setState({ ListUser: response.data.result.Result });

        console.log("ambil result admin", response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    const { ListUser } = this.state;
    const is_login = JSON.parse(localStorage.getItem("is_login"));

    console.log("hasil ambil terakhir admin", this.state);
    if (is_login === null) {
      return <Redirect to={{ pathname: "/signin" }} />;
    } else {
    return (
      <div className="Home">
        <br />
        <br />
        <Link to='/tambah' className='text-white'>Tambah Data</Link>
        <div className="container row mx-auto">
        <button className='btn btn-success ' ><Link to='/tambah' className='text-white'>Tambah Data</Link></button>
          <br></br>
          <Link to='/tambah' className='text-white'>Tambah Buku</Link>
          <table class="table table-striped">
            <thead>
              <tr className="text-center border">
                <th />
                <th>Judul Buku</th>
                <th>Author</th>
                <th>Kategori</th>
                <th>Kondisi</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {ListUser.map((item, key) => {
                console.log("hasil ", key);
                return (
                  <Cardbuku
                    delete={this.handleDelete}
                    key={key}
                    id={item.id}
                    judul={item.id}
                    author={item.id}
                    kategori={item.id}
                    kondisi={item.id}
                    status={item.id}
                   
                    
                    
                    
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
}
export default BukuSaya;
