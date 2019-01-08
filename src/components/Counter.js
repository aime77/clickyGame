import React from "react";
import ImageCard from "./ImageCard"

class Counter extends React.Component {

  state = {
    count: 0
  };

  handleIncrement = () => {
   
    this.setState({ count: this.state.count + 1 });
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Score:
        </div>
        <div className="card-body">
          <p className="card-text">Click Count: {this.state.count}</p>
          <ImageCard onClick={this.handleIncrement}/>
        </div>
      </div>
    );
  }
}

export default Counter;