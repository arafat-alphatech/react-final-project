import React, { Component } from "react";
import "../App.css";
import { withRouter } from 'react-router-dom'
import { connect } from "unistore/react";
import { actions } from "../store";
import Cardpermintaan from "../Components/Cardpermintaan";
import axios from "axios";

const getAllBook = "http://54.255.166.203:8000/users/request?filter=borrower";
class Permintaansaya extends Component {
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
            console.log(error);
          });
      };
    

    render() {
        const ListBuku = this.state.ListBuku
        var books = []
        
        for (let i= 0; i< ListBuku.length; i++){
            let data = ListBuku[i].book
            data["req_id"] = ListBuku[i].id
            books.push(data)
        }


        return (
            <div>
                <div className="Home">
                    <div className="container ">
                        <div className="col-md-12">
                            <div className="row">
                                <table className="table table-striped ">
                                    <thead>
                                        <tr className=" border">
                                            <th>Judul Buku</th>
                                            <th>Kategori</th>
                                            <th>Kondisi</th>
                                            <th>Pemilik</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                    books.map((item, key) => {
                                        return (
                                            <Cardpermintaan
                                            key={key}
                                            id={item.req_id}
                                            title={item.title}
                                            kategori={item.category}
                                            kondisi={item.condition}
                                            pemilik={item["users.name"]}
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

export default connect("listBooks", actions)(withRouter(Permintaansaya))
