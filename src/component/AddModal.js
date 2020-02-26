import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from 'react-redux';
import {addMovie , editMovie} from  '../actions/movieActions'
 
class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: this.props.editMode?this.props.movieToEdit.title:"",
       count: this.props.editMode?this.props.movieToEdit.count:0,
      image: this.props.editMode?this.props.movieToEdit.img:""
    };
  }
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  add = () => {
    this.props.addNewmovie(this.state);
    this.setState({ show: false });
  };
  edit=()=>{
    this.props.editMovie(this.state)
    this.setState({ show:false})
  }
  render() {
    return (
      <div>
        <Button className="naarach" variant="primary" onClick={this.handleShow}>
         { this.props.editMode ? "edit " :"Add a movie  +"}
        </Button>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>  
              <div>
                <label>Title:</label>
                <input type="text" onChange={this.handleChange} name="title" value={this.state.title} />
              </div>
              <div>
                <label>Image:</label>
                <input type="text" onChange={this.handleChange} name="img"  value={this.state.image}/>
              </div>
              <div>
                <label>Rating:</label>
                <input type="text" onChange={this.handleChange} name="count" value={this.state.count} />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button onClick={!this.props.editMode?this.add:this.edit} variant="primary">
            {this.props.editMode?"Edit movie":" Add movie"}
              </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state)=> {
    return {
      data: state.MovieReducer
    }
  }
  const mapDispatchToProps = (dispatch)=> {
    return {
      addNewmovie: newmovie => dispatch(addMovie(newmovie)) 
   , editMovie:newEdit=> dispatch(editMovie(newEdit))
    }
  }
export default connect (mapStateToProps,mapDispatchToProps)(AddModal);