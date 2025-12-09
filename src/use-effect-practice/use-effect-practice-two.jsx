import React, { useState, useEffect } from "react";

const UseEffectComponentTwo = () => {
  const [TimeLapse, setTimeLapse] = useState(0);
  useEffect(() => {
    console.log(`Time Lapsed : ${TimeLapse}`);
    const interval = setInterval(() => {
      setTimeLapse(TimeLapse + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [TimeLapse]);
  return <h1>Time Lapsed : {TimeLapse}</h1>;
};
export default UseEffectComponentTwo;
