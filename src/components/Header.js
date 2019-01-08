import React from "react";
import "./ImageList.css";

const Header = ({ counter, image, higuestCount, feedbackText }) => {
  if (!image) {
    return <div>Search for a topic of interest to begin!</div>;
  }
  return (
    <div className="ui segment">
      <h3 className="ui right aligned header">
        <p>Click Count: {counter}</p>
        <p>Higuest Score: {higuestCount}</p>
      </h3>
      <h3 className="ui left aligned header">Clicky Game</h3>
      <h3 className="ui center aligned header">{feedbackText} </h3>
    </div>
  );
};

export default Header;
