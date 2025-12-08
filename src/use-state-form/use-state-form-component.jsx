import React from "react";
import { useState } from "react";
import { UseStateFormStyle } from "./use-state-form-style";

const UseStateFormComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [numbers, setNumber] = useState([]);

  const changeStuff = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setNumber([...numbers, e.target.value]);
    }
    // setNumber([...numbers, e.target.value]);
  };

  const submitFun = () => {
    console.log(`The name is : ${name}`);
    console.log(`The Email is : ${email}`);
    console.log(`The Number is : ${numbers}`);
  };
  return (
    <UseStateFormStyle>
      <h1>UseState Form</h1>
      <form action={submitFun}>
        <label htmlFor="name">Name : </label>
        <input type="text" name="name" onChange={changeStuff} />
        <label htmlFor="email">email : </label>
        <input type="email" name="email" onChange={changeStuff} />
        <label htmlFor="number">Number : </label>
        <input type="number" name="number" onChange={changeStuff} />
        <button type="submit">Submit</button>
      </form>
    </UseStateFormStyle>
  );
};

export default UseStateFormComponent;
