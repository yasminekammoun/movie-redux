import React, { Component } from 'react'
import './App.css'
import Movielist from './component/Movielist';
import Header from './component/Header';
import AddModal from './component/AddModal';
import { connect } from 'react-redux';
import {addMovie} from  './actions/movieActions'
import {searchMovie} from './actions/movieActions'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [
        
      ],
      newRating: 1,
      newtext:'',
      isLoading:true
    }
    setTimeout(() => this.setState({loading: false}), 5000)
  }
  giveText = t =>{
    this.setState({newtext: t})
  }
  addNewmovie=(movie)=>{
   this.setState({movies:this.state.movies.concat(movie)})
  }

  giveRate = x => {
    this.setState({newRating: x})
  }
  render() {
    
    return (
      <div className="navrate">
        <Header rate={this.state.newRating} giveNewRate={rate => this.giveRate(rate)}  title={this.state.newtext} giveNewtext={ title=>this.giveText(title)}/>
        <AddModal editMode={false} addMovie={movie=>this.addNewmovie(movie)}/>
        <Movielist />  
        </div>
    
    )
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
  }
}
export default connect (mapStateToProps,mapDispatchToProps)(App)
