import React, { Component } from "react";

import Search from "../Components/Search";
import CardBooks from "../Components/CardBooks";

import "../App.css";
import { withRouter} from 'react-router-dom' 
import { connect } from "unistore/react";
import { actions } from "../store";


class Home extends Component {

    componentWillMount = () => {
        this.props.getAllBooks()
    }

    render() {
        const listBooks = this.props.listBooks
        return (
            <div>
                <div className="Home">
                    <br />
                    {/* doSearch={this.handleInputChange} keyword={this.state.search} */}
                    <Search />
                    <br />
                    <div className="container ">
                        <div className="col-md-12">
                            <div className="row">

                                {
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
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect("listBooks", actions)(withRouter(Home))
