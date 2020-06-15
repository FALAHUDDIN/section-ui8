import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import Section from "./section";

export default class container extends Component {
  render() {
    return (
      <div
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
          overflow: "unset",
        }}
      >
        <Header />
        {/* Inner container */}
        <div
          style={{
            position: "relative",
            top: "50px",
            height: "calc(100% - 100px)",
          }}
        >
          <Section title="Title1" sub="Subtitle1" text="Text1" />
          <Section title="Title2" sub="Subtitle2" text="Text2" />
          <Section title="Title3" sub="Subtitle3" text="Text3" />
          <Section title="Title4" sub="Subtitle4" text="Text4" />
        </div>
        {/* Inner container */}
        <Footer />
      </div>
    );
  }
}
