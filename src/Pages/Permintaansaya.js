import React, { Component } from "react";
import "../App.css";
import { withRouter } from 'react-router-dom'
import { connect } from "unistore/react";
import { actions } from "../store";
import Cardpermintaan from "../Components/Cardpermintaan";

class Permintaansaya extends Component {

    componentWillMount = () => {
        this.props.getAllBooks()
    }

    render() {
        const listBooks = this.props.listBooks
        return (
            <div>
                <div className="Home">
                    <div className="container ">
                        <div className="col-md-12">
                            <div className="row">
                                <table className="table table-striped ">
                                    <thead>
                                        <tr className="text-center border">
                                            <th />
                                            <th>Judul Buku</th>
                                            <th>Kategori</th>
                                            <th>Kondisi</th>
                                            <th>Pemilik</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {/* {
                                    listBooks.map((item, key) => {
                                        return (
                                            <CardBooks
                                            key={key}
                                            id={item.id}
                                            title={item.title}
                                            image={item.image}
                                            />
                                            );
                                    })
                                } */}
                                        <Cardpermintaan />
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
