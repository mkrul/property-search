import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h5>Enter your search criteria:</h5>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 p-3">
              <label>Latitude Left:</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="col-md-3 p-3">
              <label>Latitude Right:</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="col-md-3 p-3">
              <label>Longitude Top:</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="col-md-3 p-3">
              <label>Longitude Bottom:</label>
              <input type="text" className="form-control"/>
            </div>
          </div>
          <div className="float-right">
            <button type="submit" className="btn btn-success">Search</button>
          </div>
        </div>
      </div>
    );
  }
}
