import React, { Component } from "react";
import "./App.css";
import "../public/static/css/bootstrap.css";
import { Caesar } from "./Caesar";
import { Vigenere } from "./Vigenere";
import { Atbash } from "./Atbash";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container" id="mainContainer">
          {/* <label>Caesar Cipher<Caesar /></label>
          <label>Caesar Cipher Output: <p></p></label>

          <Vigenere /> */}

          <Atbash />
        </div>
      </div>
    );
  }
}

export default App;
