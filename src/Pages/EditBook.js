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
    image: "",
    categoryList: []
  };

  componentDidMount = () =>{
    const self = this
    axios
    .get("http://54.255.166.203:8000/categories")
    .then(result => {
      self.setState({ categoryList: result.data.result })      
    })
    .catch(function(error) {
      console.log(error);
      alert("Error");
    }); 
    
    const id = this.props.match.params.id
    const token = localStorage.getItem("token");
    const header = {
      headers: {
        Authorization: "Bearer " + token
      }
    }
    
    axios
    .get("http://54.255.166.203:8000/books/" + id, header)
    .then(result => {
      const data = result.data.results[0]
      self.setState({ 
        title: data.title,
        author: data.author,
        category: data.category,
        condition: data.condition,
        desc: data.desc,
        image: data.image
      })      
      console.log(result.data.results[0])
    })
    .catch(function(error) {
      console.log(error);
      alert("Error");
    });

  }

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
    const id = this.props.match.params.id
    const self = this;
    axios
      .put(
        "http://54.255.166.203:8000/books/" + id,
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
        alert("Update buku berhasil!");
      })
      .catch(function(error) {
        console.log(error);
        alert("error");
      });
  };
  render() {
    const categoryList = this.state.categoryList
    return (
      <div className="container">
				<div className="col-lg-5 mx-auto mt-5">
					<div className="row">
						<div className='card col-md-12 col-xs-12'>
          <br />
          <h3 className="text-center text-danger">Edit Data Buku</h3>
          
          <form onSubmit={this.handlePost}>
            <div className="form-group col-md-12 col-xs-12">
              <label htmlFor="inputEmail4">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={this.state.title}
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
                value={this.state.author}
                id="desc"
                onChange={this.HandleAuthor}
                placeholder="Author"
                required
              />
            </div>
            <div className="form-group col-md-12 col-xs-12">
              <label htmlFor="inputAddress2">Category</label>
              <select name="category" value={this.state.category} className="form-control" onChange={this.HandleCategory}>
                  {
                    categoryList.map((item, key) => {
                      return  <option key={key} value={item} >{item}</option>
                    })
                  }
              </select>
            </div>
            <div className="form-group col-md-12 col-xs-12">
              <label htmlFor="inputAddress2">kondisi</label>
              <input
                type="text"
                className="form-control"
                name="condition"
                value={this.state.condition}
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
                value={this.state.desc}
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
                name="image"
                value={this.state.image}
                onChange={this.HandleImage}
                placeholder="image"
                required
              />
            </div>
            <div className='text-center'>
              <button type="submit " className="btn btn-primary mx-auto">
                Update
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
