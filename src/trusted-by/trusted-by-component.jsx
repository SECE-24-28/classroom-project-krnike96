import React from "react";
import { TrustedByStyle } from "./trusted-by-style";
import { TrustedByData } from "./trusted-by-data";
import { useParams } from "react-router-dom";

const renderIconSvg = (icon, color) => {
  const path = icon.icon[4];

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon={icon.iconName}
      className={`svg-inline--fa fa-${icon.iconName} fa-xl`}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${icon.icon[0]} ${icon.icon[1]}`}
      color={color}
    >
      <path fill="currentColor" d={path}></path>
    </svg>
  );
};

const TrustedByComponent = () => {
  const {id } = useParams();
  console.log(`The Id is : ${id}`);
  return (
    <TrustedByStyle>
      <div className="parent">
        <div>
          <h1 className="title">Trusted By</h1>
        </div>
        <div className="element">
          {TrustedByData.map((item, index) => {
            const boundaryClass =
              item.boundaryType === "up"
                ? "image-boundary-up"
                : "image-boundary-down";

            const boundaryStyle = { backgroundColor: item.color };

            let backgroundDivs;

            if (item.boundaryType === "down") {
              backgroundDivs = (
                <>
                  <div
                    className="upper-background"
                    style={{ backgroundColor: item.color }}
                  ></div>
                </>
              );
            } else {
              backgroundDivs = (
                <div
                  className="lower-background"
                  style={{ backgroundColor: item.color }}
                ></div>
              );
            }
            return (
              <div className="item" key={index}>
                <div className="main-area">
                  <div className={boundaryClass} style={boundaryStyle}>
                    <div className="image">
                      {renderIconSvg(item.icon, item.color)}
                    </div>
                  </div>
                  <div className="subtitle">{item.subtitle}</div>
                  <div className="para">{item.para}</div>
                </div>
                {backgroundDivs}
              </div>
            );
          })}
        </div>
      </div>
    </TrustedByStyle>
  );
};

export default TrustedByComponent;
