import React from "react";
import "./ImageList.css";

const Header = ({ counter, higuestCount, feedbackText }) => {
  const style = {
    fontFamily: "Georgia",
    fontSize: "30px"
  };

  const style2 = {
    fontFamily: "Georgia",
    fontSize: "25px"
  };
  return (
    <div className="ui segment">
      <h3 className="ui left aligned header" style={style}>
        Memory Game
      </h3>
      <h3 className="ui right aligned header">
        <p style={style2}>
          Click Count: {counter} <br></br>
          Higuest Score: {higuestCount}
        </p>
      </h3>

      <h3 className="ui center aligned header" style={style2}>
        {feedbackText}
      </h3>
    </div>
  );
};

export default Header;
