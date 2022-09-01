import React from "react";
import Navbar from "./components/Navbar";
import { ImageContentBox } from "./components/ContentBox";
import Footer from "./components/Footer";

import "./App.css";

import content from "./content/content.json";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
};

export default App;

const Body = () => {
  return (
    <div className="body">
      {content.map(({ title, text, src, buttonName, reverse }) => {
        return (
          <ImageContentBox
            title={title}
            text={text}
            src={src}
            reverse={reverse}
            buttonText={buttonName}
          />
        );
      })}
    </div>
  );
};
