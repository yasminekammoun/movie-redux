import React, { Component } from "react";
import MovieCard from "./MovieCard";
import Hoc from "./Hoc";
import { connect } from "react-redux";

class Movielist extends Component {
  
  render() {
      console.log(this.props.filtredList)
    return (
      <div className="cards">
        {(this.props.filtredList.length
          ? this.props.filtredList
          : this.props.movies
        ).map(el => (
          <MovieCard infos={el} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movieReducer.movies,
    filtredList: state.movieReducer.filtredList
  };
};

export default connect(mapStateToProps)(Movielist);
