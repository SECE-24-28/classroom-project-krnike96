import React from "react";
import {
  HeroContainer,
  HeroLeft,
  HeroTitle,
  HeroText,
  SearchBox,
  SearchInput,
  SearchBtn,
  HeroImage
} from "./HeroStyle";

const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroLeft>
        <HeroTitle>
          The <span>Smart</span> Choice For <span>Future</span>
        </HeroTitle>

        <HeroText>
          Elearn is a global training provider specialising in accredited and bespoke courses.
        </HeroText>

        <SearchBox>
          <SearchInput placeholder="Search Courses..." />
          <SearchBtn>Continue</SearchBtn>
        </SearchBox>
      </HeroLeft>

      <HeroImage src="/src/assets/hero.png" alt="hero" />
    </HeroContainer>
  );
};

export default Hero;
