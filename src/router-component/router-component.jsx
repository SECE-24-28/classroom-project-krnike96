import React from "react";
import { RouterStyle } from "./router-style";
import { Link } from "react-router-dom";
import { useState } from "react";
const RouterComponent = () => {
  const [counter, setCount] = useState(0);
  const changeVal = (val) => {
    if (val == -1) {
      if (counter <= 0) {
        return;
      }
      setCount(counter - 1);
    } else {
      setCount(counter + 1);
    }
  };
  return (
    <RouterStyle>
      <div className="parent">
        <button>
          <Link className="buttom" to="/trusted-by/1">
            Trusted-by
          </Link>
        </button>
        <button>
          <Link className="buttom" to="/OurPromiseComponent">
            Our Promises
          </Link>
        </button>
        {/* <button>< className="buttom" to="/ImpactAtAGlanceComponent">Impact at a Glance</Link></button> */}
        <h3>Count : {counter}</h3>
        <button onClick={() => changeVal(1)}>+</button>
        <button onClick={() => changeVal(-1)}>-</button>
      </div>
    </RouterStyle>
  );
};

export default RouterComponent;
