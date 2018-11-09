import React, { Component } from "react";

import RatingModal from "../Components/RatingModal";
import "../App.css";
import axios from "axios";

const getAllBook = "http://192.168.43.193:8000/users/request?filter=borrower&status=true";
class Dipinjam extends Component {

    state = {
        ListBukuDipinjam: [],
        List: []
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

                self.setState({ ListBukuDipinjam: response.data.result });
                self.setState({ List: response.data });
                
            })
            .catch(function (error) {

            });
    };


    ratingChange = (e) => {
        console.log(e.target.name)

    }

    render() {
        const ListBukuDipinjam = this.state.ListBukuDipinjam
        const List = this.state.List
       
        var fusion = []
        // var borrow=[]
        for (let i = 0; i < ListBukuDipinjam.length; i++) {
            var data = {}
            for (let key in ListBukuDipinjam[i].book) {
                if (key === "id") {
                    data["book_id"] = ListBukuDipinjam[i].book[key]
                }
                data[key] = ListBukuDipinjam[i].book[key]
            }
            fusion.push(data)
        }
        data = fusion[0]
        for (var key in data){
            console.log("key: ", key, " data: ", data[key])
        }
        
        return (

            <div >
               
                <div className="container" style={{marginTop: 50}}>
                        <h3 className="mb-4">Daftar Buku Dipinjam</h3>
                        <table className="table table-hover table-responsive" >
                            <thead className="text-center">
                                <tr>
                                    <th width="20%" >Judul</th>
                                    <th>Kategori</th>
                                    <th>Kondisi</th>
                                    <th>Tanggal Pinjam</th>
                                    <th>Tanggal Kembali</th>
                                    <th>Pemilik</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>{fusion.title}</td>
                                    <td>{fusion.category}</td>
                                    <td>{fusion.condition}</td>
                                    <td>20-11-2018</td>
                                    <td>27-11-2018</td>
                                    <td>{fusion["users.name"]}</td>
                                    <td>Sudah Kembali</td>
                                    <td>
                                        <button type="button" className="btn btn-sm btn-primary" data-toggle="modal" data-target="#modal1" disabled> Beri Rating </button>
                                    </td>
                                </tr>
                                {/* <tr>
                                    <td>ffffffffffffffff asdasdasdas</td>
                                    <td>Komik</td>
                                    <td>Bagus</td>
                                    <td>20-11-2018</td>
                                    <td>27-11-2018</td>
                                    <td>Bayu</td>
                                    <td>Sudah Kembali</td>
                                    <td>
                                        <button type="button" className="btn btn-sm btn-primary" data-toggle="modal" data-target="#modal2"> Beri Rating </button>
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>
                </div>

                <RatingModal modal_id={"modal1"}/>
                <RatingModal modal_id={"modal2"}/>

            
            </div>
      );
    }
}

export default Dipinjam;