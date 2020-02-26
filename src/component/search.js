import React ,{ Component } from "react";
import { getName} from "./actions/movieActions";
import {connect} from 'react';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
      text: ""
    };
  }
  handleChange = e => {
    this.setState({
      text: e.target.value
    });
    this.props.getkeyword(this.state.text);
  
  };
  render() {
   
  return (
    <div className="search-input">
      <input
        onChange={this.handleChange}
        type="text"
        placeholder="Type movie's name"
      />
      <button>Search</button>
    </div>
  );
  }
};
const mapDispatchToProps = dispatch => {
  return {
    getkeyword: name=> dispatch(getName(name))
  }
}
export default connect(null,mapDispatchToProps)(Search);