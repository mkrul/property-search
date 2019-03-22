import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import PropertyList from "./components/property-list.component";
import SearchBar from "./components/search-bar.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container p-3 mt-3">
          <h2>Property Search</h2>
          <hr />
          <SearchBar/>
        </div>
        <Route path="/" exact component={PropertyList}/>
      </Router>
    );
  }
}

export default App;
