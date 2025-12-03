import React from "react";
import { VisionComponentStyle } from "./vision-component-style";

const VisionComponent = () => {
  return (
    <VisionComponentStyle>
      <div className="parent">
        <div className="child-one">
          <h1 className="child-one-title">
            A Symbol of Excellence in Placement Training
          </h1>
          <p className="child-one-paragraph">
            Aptitude Guru Hem was born from the aspiration to create a learning
            environment that inspires greatness. Our founder, driven by personal
            experiences and a desire to make a difference, established the
            company with a mission to empower students with the right skills and
            mindset for success.
          </p>
        </div>
        <div className="child-two">
          <div className="vision">
            <h2 className="subheader-vision">Our Vision</h2>
            <p className="subheader-paragraph">
              Our vision is to empower individuals from diverse backgrounds to
              become accomplished professionals. At Aptitude Guru Hem, we
              believe that knowledge has the power to transcend boundaries.
            </p>
          </div>
          <div className="divider"></div>
          <div className="mission">
            <h2 className="subheader-mission">Our Mission</h2>
            <p className="subheader-paragraph">
              Our mission is to revolutionize education by providing
              comprehensive training in aptitude, coding, and web/mobile
              development. We foster a culture of inclusivity and personal
              growth.
            </p>
          </div>
        </div>
      </div>
    </VisionComponentStyle>
  );
};

export default VisionComponent;
