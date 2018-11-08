import React, { Component } from "react";
import axios from "axios";

import { BrowserRouter, Link } from "react-router-dom";

class Tambah extends Component {
  state = {
    ListAdmin: [],
    title: "",
    author: "",
    category: "",
    condition: "",
    desc: "",
    image: ""
  };
  HandleTitle = event => {
    this.setState({ title: event.target.value });
  };
  HandleAuthor = event => {
    this.setState({ author: event.target.value });
  };
  HandleCategory = event => {
    this.setState({ category: event.target.value });
  };
  HandleCondition = event => {
    this.setState({ condition: event.target.value });
  };
  HandleDesc = event => {
    this.setState({ image: event.target.value });
  };
  HandleImage = event => {
    this.setState({ desc: event.target.value });
  };

  handlePost = event => {
    event.preventDefault();
    let token = localStorage.getItem("token");
    console.log(token, "ss");
    const self = this;
    axios
      .post(
        "http://192.168.43.193:8000/books",
        {
          title: this.state.title,
          author: this.state.author,
          category: this.state.category,
          condition: this.state.condition,
          desc: this.state.desc,
          image: this.state.image
        },
        {
          headers: {
            Authorization: "Bearer " + token
          }
        }
      )
      .then(result => {
        self.props.history.push("/bukusaya");
        alert("Tambah buku berhasil!");
      })
      .catch(function(error) {
        console.log(error);
        alert("error");
      });
  };
  render() {
    return (
      <div className="container">
				<div className="col-lg-5 mx-auto mt-5">
					<div className="row">
						<div className='card col-md-12 col-xs-12'>
          <br />
          <h3 className="text-center text-danger">Tambah Buku</h3>
          
          <form onSubmit={this.handlePost}>
            <div className="form-group col-md-12 col-xs-12">
              <label htmlFor="inputEmail4">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                onChange={this.HandleTitle}
                placeholder="Judul Buku"
                required
              />
            </div>
            <div className="form-group col-md-12 col-xs-12">
              <label htmlFor="inputPassword4">Author</label>
              <input
                type="text"
                className="form-control"
                name="author"
                id="desc"
                onChange={this.HandleAuthor}
                placeholder="Author"
                required
              />
            </div>
            <div className="form-group col-md-12 col-xs-12">
              <label htmlFor="inputAddress2">Category</label>
              <input
                type="text"
                className="form-control"
                name="category"
                onChange={this.HandleCategory}
                placeholder="Category"
                required
              />
            </div>
            <div className="form-group col-md-12 col-xs-12">
              <label htmlFor="inputAddress2">kondisi</label>
              <input
                type="text"
                className="form-control"
                name="condition"
                onChange={this.HandleCondition}
                placeholder="kondisi"
                required
              />
            </div>
            <div className="form-group col-md-12 col-xs-12">
              <label htmlFor="inputAddress2">Deskripsi</label>
              <textarea
                type="text"
                className="form-control"
                name="desc"
                onChange={this.HandleDesc}
                placeholder="Desc"
                required
              />
            </div>
            <div className="form-group col-md-12 col-xs-12">
              <label htmlFor="inputAddress2">Image</label>
              <input
                type="text"
                className="form-control"
                name="desc"
                onChange={this.HandleImage}
                placeholder="image"
                required
              />
            </div>
            <div className='text-center'>
              <button type="submit " className="btn btn-primary mx-auto">
                Tambah
              </button>
              
            </div>
            <br></br>
          </form>
        </div>
      </div>
      </div>
      </div>
    );
  }
}
export default Tambah;
