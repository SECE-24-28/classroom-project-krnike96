import axios from "axios";
import React from "react";

const SignupFormComponent = () => {
  const submitThings = async (e) => {

    // e.preventDefault();
    // console.log(`The values : ${e.target.firstName.value}`);
    // console.log(`The values : ${e.target.lastName.value}`);
    // console.log(`The values : ${e.target.email.value}`);

    // try {
    //   const pushDetails = await axios.post(
    //     "http://localhost:21000/api/v1/User/insert-user",
    //     {
    //       firstName: e.target.firstName.value,
    //       lastName: e.target.lastName.value,
    //       email: e.target.email.value,
    //     }
    //   );

    //   if (pushDetails.status === 200) {
    //     console.log(`Data inserted successfully.`);
    //   } else {
    //     console.log(`Data not successfully.`);
    //   }
    // } catch (e) {
    //   console.log(`Error : ${e}`);
    // }

    e.preventDefault();
    console.log(`The values : ${e.target.firstName.value}`);
    console.log(`The values : ${e.target.lastName.value}`);
    console.log(`The values : ${e.target.email.value}`);

    try {
      const getDetails = await axios.get(
        "http://localhost:21000/api/v1/User/get-user"
      );

      if (getDetails.status === 200) {
        console.log(`Data collected successfully.`);
        console.log(`The collected data : ${e.target.lastName.value}`);
      } else {
        console.log(`Data Fetching Failed.`);
      }
    } catch (e) {
      console.log(`Error : ${e}`);
    }
  };
  return (
    <div className="parent">
      <form onSubmit={submitThings}>
        <label htmlFor="firstName">FirstName : </label>
        <input type="text" id="firstName" />
        <label htmlFor="lastName">LastName : </label>
        <input type="text" id="lastName" />
        <label htmlFor="email">Email : </label>
        <input type="text" name="email" id="email" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default SignupFormComponent;
