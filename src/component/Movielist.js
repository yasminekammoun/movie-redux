import React, { Component } from "react";
import MovieCard from "./MovieCard";
// import Hoc from "./Hoc";
import { connect } from "react-redux";

class Movielist extends Component {
  render() {
    console.log(this.props.filtredList);
    console.log(this.props.filetrRate);
    return (
      <div className="cards">
        {(this.props.filtredList.length
          ? this.props.filtredList
          : this.props.movies
        ).map(el => (
          <MovieCard infos={el} />
        ))}
        {/* {this.props.movies
          .filter(el => el.count >= this.props.filetrRate)
          .map((el, key) => (
            <MovieCard infos={el} key={key} />
          ))} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movieReducer.movies,
    filtredList: state.movieReducer.filtredList,
    filetrRate: state.movieReducer.rating
  };
};

export default connect(mapStateToProps)(Movielist);
