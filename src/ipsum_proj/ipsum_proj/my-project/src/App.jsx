import React from "react";
import Navbar from "./navbar/Navbar";
import Hero from "./Hero/Hero";
import Tracks from "./Tracks/Tracks";
import Features from "./Features/Features";
import Newsletter from "./NewsLetter/Newsletter";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Tracks />
      <Features />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
