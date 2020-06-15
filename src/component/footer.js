import React, { Component } from "react";

export default class footer extends Component {
  render() {
    return (
      <div
        style={{
          position: "fixed",
          display: "flex",
          width: "100%",
          height: "50px",
          backgroundColor: "green ",
          bottom: "0",
        }}
      ></div>
    );
  }
}
