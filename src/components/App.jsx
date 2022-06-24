import React from "react";
import Component from "./Component";
import Title from "./Title";
import Greeting from "./Greeting";
import IsEven from "./IsEven";
const App = () => {
  return (
    <div>
      <Component>
        <Title>
          <Greeting />
        </Title>
      </Component>
      <br />
      <h3>Number 16 :</h3><IsEven number={16} />
      <br />
      <h3>Number 5 :</h3><IsEven number={5} />
    </div>
  );
};
export default App;