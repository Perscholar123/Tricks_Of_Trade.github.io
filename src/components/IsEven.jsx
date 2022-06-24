import React from "react";
const IsEven = (props) => {
  console.log(props);
  // Create a variable to hold the result from the if statement
  //   let result;
  //   if (props.number % 2 === 0) {
  //     result = <h1>It is Even</h1>;
  //   } else {
  //     result = <h1>It is Odd</h1>;
  //   }
  return props.number % 2 === 0 ? <h1>It is even</h1> : <h1>It is odd</h1>;
};
export default IsEven;