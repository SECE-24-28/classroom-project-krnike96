import React from "react";
import { FurnitureComponentStyle } from "./furniture-component-style";
const FurnitureComponent = () => {
  return (
    <FurnitureComponentStyle>
      <div className="parent">
        <div className="child-one">
          <div className="title-box">
            <div className="title">
              <h1 className="title-content">
                <span style={{ color: "red" }}>Furniture </span> That Elevates
                Your <span style={{ color: "red" }}>Space</span>
              </h1>
              <p>Crafted for Comfort, Designed for Modern Living.</p>
            </div>
            <div className="two-buttons">
              <button className="shop-now">Shop Now</button>
              <button className="check-arrival">Check new Arrival</button>
            </div>
          </div>
        </div>
        <div className="child-two">
          <img
            className="child-two-img"
            src="/src/figma-component-one/furniture-component/images/sofa.jpg"
            alt="sofa"
          />
        </div>
      </div>
    </FurnitureComponentStyle>
  );
};

export default FurnitureComponent;
