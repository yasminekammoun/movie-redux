import React, { Component } from "react";

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 2
    };
  }

  render() {
    let arrayOfStars = [];

    for (let i = 0; i < 5; i++) {
      if (this.props.rate > i) {
        arrayOfStars.push(
          <i
            onClick={() => {
              this.props.rateIt(i + 1);
              this.props.searchByRate();
            }}
            className="fas fa-star"
          ></i>
        );
      } else {
        arrayOfStars.push(
          <i
          onClick={() => {
            this.props.rateIt(i + 1);
            this.props.searchByRate();
          }}
            className="far fa-star"
          ></i>
        );
      }
    }
    return <div>{arrayOfStars}</div>;
  }
}

export default Rating;
