import React from 'react'
import Rating from './Rating';
import {getRating, searchMovie} from "../actions/movieActions"
import {connect} from 'react-redux';
  

class Header extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        title: ""
      };
    }
    handleChange = e => { 
        this.setState({
         title: e.target.value
        });
      };
      render() {
    return (
        <div className="p-1 bg-light shadow-sm mb-4 nr">
            <div className="input-group">
                <input onChange={e => this.props.giveNewtext(e.target.value)} className="form-control border-0 bg-light width" type="search" placeholder="type movie name here to search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 " type="submit">Search</button>
            </div>
            <div className="rate">
                <h5>Minimum rating</h5>
                <Rating rate={this.props.rate} rateIt={this.props.getRate} searchByRate={this.props.searchByRate} />
            </div>
        </div>
    );
}}
const mapDispatchToProps=dispatch=>{
  return {
      getRate: rate => dispatch(getRating(rate)),
      searchByRate : ()=> dispatch(searchMovie())
    }
    
}


export default connect(null,mapDispatchToProps)(Header);