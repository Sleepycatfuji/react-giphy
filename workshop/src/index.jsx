import "../assets/stylesheets/application.scss";

import React from "react";
import ReactDOM from "react-dom";

// const Hello = (props) => {
//   const { name, age } = props;
//   const message = `Hello, I'm ${name} and I'm ${age}!`;
//   return <h1>{message}</h1>;
// };

class Hello extends React.Component {
  render() {
    const { name, age } = this.props;
    const message = `Hello, I'm ${name} and I'm ${age}!`;
    return <h1>{message}</h1>;
  }
}

const root = document.getElementById("root");
ReactDOM.render(<Hello name="Kim the Great" age="33" />, root);
