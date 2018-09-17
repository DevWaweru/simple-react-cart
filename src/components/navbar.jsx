import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 ml-4 h1">
         Items<span className="badge badge-pill badge-primary"> {this.props.totalCounters} </span>
        </span>
      </nav>
    );
  }
}
export default NavBar;
