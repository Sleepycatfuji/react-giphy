import "../assets/stylesheets/application.scss";

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
// rsc + tab
// const Hello = (props) => {
//   const { name, age } = props;
//   const message = `Hello, I'm ${name} and I'm ${age}!`;
//   return <h1>{message}</h1>;
// };

// rcc + tab
// class Hello extends React.Component {
//   render() {
//     const { name, age } = this.props;
//     const message = `Hello, I'm ${name} and I'm ${age}!`;
//     return <h1>{message}</h1>;
//   }
// }

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
