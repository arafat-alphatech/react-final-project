import React, { Component } from "react";
import { Link } from 'react-router-dom' 


class RatingModal extends Component {
    state = {
        rating: 3
    }

    ratingSubmit = () => {
        console.log(this.state)
    }

    change = (e) => {
        this.setState({
            rating: parseInt(e.target.value)
        })
        console.log(e.target.value)
    }


    render() {
        
        return (
        <div className="modal fade" id={this.props.modal_id} >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Beri Rating</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="form-signin" onSubmit={(e) => e.preventDefault()}>

                                <input name="rating" value="1" type="radio" onChange={(e) => this.change(e)} />
                                &nbsp; <i className="fas fa-star text-warning"></i>

                            <br/><input name="rating" value="2" type="radio" onChange={(e) => this.change(e)} />
                                &nbsp; <i className="fas fa-star text-warning"></i>
                                &nbsp; <i className="fas fa-star text-warning"></i>

                            <br/><input name="rating" value="3" type="radio" onChange={(e) => this.change(e)} checked/>
                                &nbsp; <i className="fas fa-star text-warning"></i>
                                &nbsp; <i className="fas fa-star text-warning"></i>
                                &nbsp; <i className="fas fa-star text-warning"></i>

                            <br/><input name="rating" value="4" type="radio" onChange={(e) => this.change(e)} />
                                &nbsp; <i className="fas fa-star text-warning"></i>
                                &nbsp; <i className="fas fa-star text-warning"></i>
                                &nbsp; <i className="fas fa-star text-warning"></i>
                                &nbsp; <i className="fas fa-star text-warning"></i>

                            <br/><input name="rating" value="5" type="radio" onChange={(e) => this.change(e)} />
                                &nbsp; <i className="fas fa-star text-warning"></i>
                                &nbsp; <i className="fas fa-star text-warning"></i>
                                &nbsp; <i className="fas fa-star text-warning"></i>
                                &nbsp; <i className="fas fa-star text-warning"></i>
                                &nbsp; <i className="fas fa-star text-warning"></i>
                            <br/> <br/>
                            <Link to="/dipinjam" className="btn btn-sm btn-primary" onClick={() => this.ratingSubmit() } data-dismiss="modal">Submit</Link>
                            
                            &nbsp; &nbsp;
                            <button className="btn btn-sm btn-secondary" data-dismiss="modal">Close</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

export default RatingModal;