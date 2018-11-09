import React, { Component } from "react";

import "../App.css";
import axios from "axios";
import Cardbukudipinjam from '../Components/Cardbukudipinjam'
const getAllBook = "http://192.168.43.193:8000/users/request?filter=borrower&status=true";
class Dipinjam extends Component {

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
                console.log(error)
            });
    };


    ratingChange = (e) => {
        console.log(e.target.name)

    }

    render() {
        const ListBuku = this.state.ListBuku
        
        var books = []
        for (let i= 0; i< ListBuku.length; i++){
            let data = ListBuku[i].book
            data["req_id"] = ListBuku[i].id
            data["start_date"] = ListBuku[i].start_date
            data["end_date"] = ListBuku[i].end_date
            books.push(data)
        }

        console.log(books)
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
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {
                                        books.map((book, key) => {
                                            let modal_id = "modal" + key
                                            return (
                                                <Cardbukudipinjam
                                                key={key}
                                                title={book.title}
                                                category={book.category}
                                                condition={book.condition}
                                                start_date={book.start_date}
                                                end_date={book.end_date}
                                                name={book['users.name']}
                                                req_id={book.req_id}
                                                modal_id={modal_id}
                                                />
                                            )
                                        })
                                    }

                            </tbody>
                        </table>
                </div>
                           
            </div>
      );
    }
}

export default Dipinjam;