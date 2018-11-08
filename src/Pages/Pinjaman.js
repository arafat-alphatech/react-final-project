import React, { Component } from "react";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import "../App.css";


class Terpinjam extends Component {
    render() {
      return (
          <div >
                <NavBar />
                <div className="container" style={{marginTop: 150}}>
                        <table className="table table-hover table-responsive" >
                            <thead className="text-center">
                                <tr>
                                    <th width="20%" >Judul</th>
                                    <th>Ketgori</th>
                                    <th>Kondisi</th>
                                    <th>Tanggal Pinjam</th>
                                    <th>Tanggal Kembali</th>
                                    <th>Peminjam</th>
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
                                    <td>Belum Kembali</td>
                                </tr>
                                <tr>
                                    <td>fffffffffffffffffffffffffffffffffffffffasdsasdasd asdasdasdas</td>
                                    <td>Komik</td>
                                    <td>Bagus</td>
                                    <td>20-11-2018</td>
                                    <td>27-11-2018</td>
                                    <td>Bayu</td>
                                    <td>Belum Kembali</td>
                                </tr>
                                <tr>
                                    <td>fffffffffffffffffffffffffffffffffffffffasdsasdasd asdasdasdas</td>
                                    <td>Komik</td>
                                    <td>Bagus</td>
                                    <td>20-11-2018</td>
                                    <td>27-11-2018</td>
                                    <td>Bayu</td>
                                    <td>Belum Kembali</td>
                                </tr>
                            </tbody>
                        </table>
                </div>
                <Footer />
          </div>
      );
    }
}

export default Terpinjam;