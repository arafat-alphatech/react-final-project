import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CardUser from "../Components/CardUser";
import { Redirect } from "react-router-dom";


const getAllBook = "http://192.168.43.193:8000/books";

class BukuSaya extends Component {
  state = {
    ListBuku: []
  };

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    const self = this;
    axios
      .get(getAllBook, {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then(function(response) {
        // handle success
        self.setState({ ListBuku: response.data.result.Result });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    const { ListBuku } = this.state;
    console.log(ListBuku)
    const is_login = JSON.parse(localStorage.getItem("is_login"));

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
          <table className="table table-striped ">
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
              {ListBuku.map((item, key) => {
                return (
                  <CardUser
                    delete={this.handleDelete}
                    key={key}
                    id={item.id}
                    judul={item.title}
                    author={item.author}
                    kategori={item.category}
                    kondisi={item.condition}
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
