import React, { Component } from "react";

class SearchBar extends Component {
  state = { movie: "" };

  handleSubmit = event => {
    console.log(this.state.movie);
    event.preventDefault();
  };

  render() {
    return (
      <div className="search">
        <p>Krackit</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="movie"
            placeholder="Search movie..."
            onChange={event => {
              this.setState({ movie: event.target.value });
            }}
          />
          <button type="submit">Search</button>
        </form>

        <button>Login</button>
        <button>Sign Up</button>
      </div>
    );
  }
}

export default SearchBar;
