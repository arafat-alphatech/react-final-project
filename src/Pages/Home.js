import React, { Component } from "react";

import Search from "../Components/Search";
import CardBooks from "../Components/CardBooks";

import "../App.css";

class Home extends Component {
    render() {
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

                                {/* {CardBooks.map((item, key) => {
                      console.log("hasil nama", item.nama);
                      return (
                          <CardGallery
                          key={key}
                          id={item.id}
                          nama={item.nama}
                          desc={item.desc}
                          price={item.price}
                          qty={item.qty}
                          img={item.image_url}
                          />
                          );
                        })} */}

                                <CardBooks />
                                <CardBooks />
                                <CardBooks />
                                <CardBooks />
                                <CardBooks />
                                <CardBooks />
                                <CardBooks />
                                <CardBooks />
                                <CardBooks />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
