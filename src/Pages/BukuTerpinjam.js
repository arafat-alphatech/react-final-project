import React, { Component } from "react";

import axios from "axios";
import Cardbukuterpinjam from '../Components/Cardbukuterpinjam'
import "../App.css";
import RatingModal from "../Components/RatingModal";



class Terpinjam extends Component {
    
    state = {
        ListBuku: []
    };
    
    componentDidMount = () => {
        const getAllBook = "http://192.168.43.193:8000/users/request?filter=owner&status=true";

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


    return (    
        
        <div >
               <div className="container" style={{marginTop: 50}}>
                        <h3 className="mb-4">Daftar Buku Terpinjam</h3>
                        <table className="table table-hover table-responsive" >
                            <thead className="  ">
                                <tr>
                                    <th width="20%" >Judul</th>
                                    <th>Ketgori</th>
                                    <th>Kondisi</th>
                                    <th>Tanggal Pinjam</th>
                                    <th>Tanggal Kembali</th>
                                    <th>Peminjam</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                    {
                                        books.map((book, key) => {
                                            let modal_id = "modal" + key
                                            return (
                                                <Cardbukuterpinjam
                                                key={key}
                                                title={book.title}
                                                category={book.category}
                                                condition={book.condition}
                                                start_date={book.start_date}
                                                end_date={book.end_date}
                                                name={book['users.name']}
                                                modal_id={modal_id}
                                                />
                                            )
                                        })
                                    }
                            </tbody>
                        </table>
                </div>
                {
                    books.map((book, key) => {
                        let modal_id = "modal" + key
                        return <RatingModal key={key} modal_id={modal_id}/>
                    })
                }
                
          </div>
      );
    }
}

export default Terpinjam;