import React, { Component } from "react";
import "../App.css";
import { withRouter } from 'react-router-dom'
import { connect } from "unistore/react";
import { actions } from "../store";
import axios from "axios";
import Cardpermintaanpinjam from "../Components/Cardpermintaanpinjam";

const getAllBook = "http://192.168.43.193:8000/users/request?filter=owner";
class Permintaanpinjam extends Component {

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
            
            self.setState({ ListBuku: response.data.result });
                       
          })
          .catch(function(error) {
           
          });
      };
    
    render() {
        const ListBuku = this.state.ListBuku
        var books = []
        var borrow=[]
        for (let i= 0; i< ListBuku.length; i++){
            books.push(ListBuku[i].book)
        }
        for (let i= 0; i< ListBuku.length; i++){
            borrow.push(ListBuku[i].borrower)
        }
        console.log( "wkwkw",borrow)
        return (
            <div>
                <div className="Home">
                    <div className="container ">
                        <div className="col-md-12">
                            <div className="row">
                                <table className="table table-striped ">
                                    <thead>
                                        <tr className="text-center border">
                                        
                                            <th>Judul Buku</th>
                                            <th>Nama Peminjam</th>
                                            <th>Alamat</th>
                                            <th>No Telephone</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                    books.map((item, key) => {
                                        return (
                                            <Cardpermintaanpinjam
                                            key={key}
                                            title={item.title}
                                            
                                            // nama={item.image}
                                            />
                                            );
                                    })
                                }
                                  {
                                    borrow.map((item, key) => {
                                        return (
                                            <Cardpermintaanpinjam
                                            key={key}
                                            title={item.name}
                                            address={item.address}
                                            telephone={item.telephone}
                                            
                                            // nama={item.image}
                                            />
                                            );
                                    })
                                }       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect("listBooks", actions)(withRouter(Permintaanpinjam))
