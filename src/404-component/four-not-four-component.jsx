import React from "react";
import { Link } from "react-router-dom";
const FourNotFourComponent = () => {
  return (
    <div>
      <h1>404 Not found component</h1>
      <Link to="/trusted-by/1">Go to Trusted By Page</Link>
    </div>
  );
};
export default FourNotFourComponent;
