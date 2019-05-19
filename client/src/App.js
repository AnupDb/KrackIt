import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SearchBar from "./components/SearchBar";
import Landing from "./components/Landing";

class App extends Component {
  render() {
    return (
      <div id="app">
        <Router>
          <SearchBar />
          <Route exact path="/" component={Landing} />
        </Router>
      </div>
    );
  }
}

export default App;
