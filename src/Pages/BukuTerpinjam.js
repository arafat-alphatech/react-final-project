import React, { Component } from "react";



import "../App.css";


class Terpinjam extends Component {
    render() {
      return (
          <div >
               
               <div className="container" style={{marginTop: 50}}>
                        <h3 className="mb-4">Daftar Buku Terpinjam</h3>
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
                
          </div>
      );
    }
}

export default Terpinjam;