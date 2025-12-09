import React, { useState, useEffect } from "react";

const UseEffectComponent = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`name : ${name}, count : ${count}`);
  }, [name, count]);

  return (
    <>
      <h1>Use Effect</h1>
      <button onClick={() => setCount(count + 1)}>Plus</button>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </>
  );
};

export default UseEffectComponent;
