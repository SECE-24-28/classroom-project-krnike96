import React from "react";
import { PositioningStyle } from "./positioning-style";
const PositioningComponent = () => {
  return (
    <PositioningStyle>
      <div className="element-one"></div>
      <div className="element-two"></div>
      <div className="element-three"></div>
      <div className="element-four"></div>
      <div className="square">
        <div className="square-one"></div>
      </div>
    </PositioningStyle>
  );
};

export default PositioningComponent;
