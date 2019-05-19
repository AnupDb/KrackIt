import React, { Component } from "react";

export class Main extends Component {
  render() {
    return (
      <div className="main has-bg">
        <div>
          <h1>Movie reviews, ratings and more</h1>
          <p>Be a movie critic, write reviews for your favorite movies.</p>
          <button>Login</button>
          <button>Sign Up</button>
        </div>

        <img src="#" alt="Overview" />
      </div>
    );
  }
}

export default Main;
