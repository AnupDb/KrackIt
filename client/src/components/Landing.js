import React, { Component } from "react";
import Main from "./Main";
import Features from "./Features";

export class Landing extends Component {
  render() {
    return (
      <div>
        <Main />
        <Features />
      </div>
    );
  }
}

export default Landing;
