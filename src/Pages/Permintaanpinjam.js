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
            .then(function (response) {
                // handle success

                self.setState({ ListBuku: response.data.result });

            })
            .catch(function (error) {

            });
    };

    render() {
        const ListBuku = this.state.ListBuku
        var datas = []

        for(let i= 0; i< ListBuku.length; i++){
            var fusion = {}
            for(let key in ListBuku[i]){
                if(key == "borrower" || key == "book" || key == "owner"){
                    for(let k in ListBuku[i][key]){
                        if(k == 'id'){
                            let idx = key + "_id"
                            fusion[idx] = ListBuku[i][key][k]
                        }else{
                            fusion[k] = ListBuku[i][key][k] 
                        }
                    }
                }else{
                    fusion[key] = ListBuku[i][key] 
                }
            }
            datas.push(fusion)
        }
        console.log(datas)

        return (
            <div>
                <div className="Home">
                    <div className="container ">
                        <div className="col-md-12">
                            <div className="row">
                                <table className="table table-striped ">
                                    <thead>
                                        <tr className="border">

                                            <th>Judul Buku</th>
                                            <th>Nama Peminjam</th>
                                            <th>Alamat</th>
                                            <th>No Telephone</th>
                                            <th className='text-center'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            datas.map((item) => {

                                                return <Cardpermintaanpinjam
                                                key={item.title}
                                                title={item.title}
                                                name={item.name}
                                                address={item.address}
                                                telephone={item.telephone}
                                                />
                                                
                                                
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
