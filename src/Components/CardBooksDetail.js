import React, { Component } from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class CardBooks extends Component {

	state = {
		book: []
	}

	getBook = () => {
		const url = "http://192.168.43.193:8000/public/books/" + this.props.match.params.id
		axios
		.get(url)
		.then((response) => {
			this.setState({
				book: response.data.results[0]
			})
		})
		.catch((err) => {
			console.log(err)
		})
	}
	
	componentWillMount = () => {
		this.getBook()
	}
	
	render() {	
		return (
		
			<div className="container">
				<div className="col-sm-12 mt-5">
					<div className="row">
						<div className='card col-sm-12 col-xs-12'>
                              
							<div className="mt-3 mb-3" style={{ height: "100%" }}>
								<div className="row">
									<div className="col-sm-4">
										<img className="card-img-top" src={this.state.book.image} alt="Card image cap"/>
									</div>
									<div className="col-sm-8">
										<div className="card-body" style={{ marginTop: 60 }}>
											<table className='table'>
                                                <tbody>
                                                    <tr>
                                                        <td>Pemilik Buku</td>
                                                        <td>{this.state.book["users.name"]}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Judul Buku</td>
                                                        <td>{this.state.book.title}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Kategori</td>
                                                        <td>{this.state.book.category}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Deskripsi Buku</td>
                                                        <td>{this.state.book.desc}</td>
                                                    </tr>   
                                                </tbody>
                                            </table>
											<Link className="btn btn-outline-success" to="/" onClick={() => this.props.handlePinjam(this.state.book.id, this.state.book.owner_id)}>Pinjam</Link>
										</div>
									</div>
										
								</div>  
  
							</div>
						</div>
					</div>
				</div>
			</div>

		);
	}
}

export default connect("listBooks", actions)(withRouter(CardBooks))
