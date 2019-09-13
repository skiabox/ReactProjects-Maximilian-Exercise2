import React from "react";

import "./CharComponent.css";

const CharComponent = props => {
  return (
    <div className="CharComponent" onClick={props.removeChar}>
      <p>{props.content}</p>
    </div>
  );
};

export default CharComponent;
