import React,{ Component } from "react";
import {connect} from 'react-redux';

class MovieDescrip extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() { this.setState(this.props.allState.movies.filter(el =>el.title===this.props.match.params.title)[0]);}
    
    render() {
      return (<div className="movie-Description">
      <img src={this.state.img} alt=".." />
      <p>{this.state.description}</p>
     </div>)
    }
}



const mapStateToProps = state => {
  return {
    allState: state.movieReducer
  };
};
export default connect(mapStateToProps)(MovieDescrip);