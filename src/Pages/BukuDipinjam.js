import React, { Component } from "react";

import RatingModal from "../Components/RatingModal";
import "../App.css";


class Dipinjam extends Component {

    ratingChange = (e) => {
        console.log(e.target.name)

    }

    render() {
        
        return (

            <div >
               
                <div className="container" style={{marginTop: 50}}>
                        <h3 className="mb-4">Daftar Buku Dipinjam</h3>
                        <table className="table table-hover table-responsive" >
                            <thead className="text-center">
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
                                <tr>
                                    <td>ffffffffffffffff asdasdasdas</td>
                                    <td>Komik</td>
                                    <td>Bagus</td>
                                    <td>20-11-2018</td>
                                    <td>27-11-2018</td>
                                    <td>Bayu</td>
                                    <td>Sudah Kembali</td>
                                    <td>
                                        <button type="button" className="btn btn-sm btn-primary" data-toggle="modal" data-target="#modal1" disabled> Beri Rating </button>
                                    </td>
                                </tr>
                                <tr>
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
                                </tr>
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