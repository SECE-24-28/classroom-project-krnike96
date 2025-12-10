import React from "react";
import { OurFacilitiesStyle } from "./our-facilities-style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { data } from "./data";

const OurFacilitiesComponent = () => {
  return (
    <OurFacilitiesStyle>
      <div className="parent">
        {data.map((item, index) => {
          return (
            <div className="facility" key={index}>
              <div className="icon">
                <FontAwesomeIcon icon={item.icon}/>
              </div>
              <div className="title">{item.title}</div>
              <div className="body">{item.body}</div>
            </div>
          );
        })}
      </div>
    </OurFacilitiesStyle>
  );
};

export default OurFacilitiesComponent;
