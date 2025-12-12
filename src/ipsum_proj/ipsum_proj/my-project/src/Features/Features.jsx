import React from "react";
import {
  FeaturesContainer,
  FeatureGrid,
  FeatureBox
} from "./FeaturesStyle";

const Features = () => {
  return (
    <FeaturesContainer>
      <h1>
        Premium <span>Learning</span> Experience
      </h1>

      <FeatureGrid>
        <FeatureBox>
          <h3>Easily Accessible</h3>
          <p>Learning will feel comfortable with Courslab.</p>
        </FeatureBox>

        <FeatureBox>
          <h3>Fun learning experience</h3>
          <p>Experience learning with activities.</p>
        </FeatureBox>

        <FeatureBox>
          <h3>Personalized Learning</h3>
          <p>Get tailored recommendations.</p>
        </FeatureBox>

        <FeatureBox>
          <h3>Learn Anytime</h3>
          <p>Your courses stay with you.</p>
        </FeatureBox>
      </FeatureGrid>
    </FeaturesContainer>
  );
};

export default Features;
