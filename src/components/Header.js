import React from "react";
import "./ImageList.css";
import { Transition } from "react-spring";

const Header = ({ counter, higuestCount, feedbackText }) => {
  return (
    <div className="ui segment">
      <h3 className="ui right aligned header">
        <p>Click Count: {counter}</p>
        <p>Higuest Score: {higuestCount}</p>
      </h3>
      <h3 className="ui left aligned header">Memory Game</h3>
      <h3 className="ui center aligned header">{feedbackText} </h3>
    </div>
  );
};

export default Header;
