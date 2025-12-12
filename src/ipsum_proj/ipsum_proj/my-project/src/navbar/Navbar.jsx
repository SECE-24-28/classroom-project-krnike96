import React from "react";
import { NavContainer, Logo, NavLinks, NavBtn } from "./NavbarStyle";

const Navbar = () => {
  return (
    <NavContainer>
      <Logo src="/src/assets/ipsum_logo.png" alt="hero"/>

      <NavLinks>
        <a href="#home">Home</a>
        <a href="#">Courses</a>
        <a href="#">Our Service</a>
        <a href="#">Contact us</a>
      </NavLinks>

      <NavBtn>Sign in</NavBtn>
    </NavContainer>
  );
};

export default Navbar;
