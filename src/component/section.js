import React, { Component } from "react";

export default class section extends Component {
  handleTopic() {
    return <div>hahah</div>;
  }

  render() {
    return (
      <div
        style={{
          height: "25%",
          display: "flex",
          flexDirection: "column",
          borderTop: "1px solid grey",
          alignItems: "center",
        }}
      >
        <div>{this.props.title}</div>
        <div>{this.props.sub}</div>
        <div>{this.props.text}</div>
      </div>
    );
  }
}
