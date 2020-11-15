import React, { Component } from 'react';
import './App.css';
import '../public/static/css/bootstrap.css';
import { Caesar } from './Caesar';
import { Vigenere } from './Vigenere';
import { Atbash } from './Atbash';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container" id="mainContainer">
          <label>
            Caesar Cipher
            <Caesar />
          </label>
          <p></p>
          <label>
            Vigenere Cipher
            <Vigenere />
          </label>
          <p></p>
          <label>
            Atbash Cipher
            <Atbash />
          </label>
        </div>
      </div>
    );
  }
}

export default App;
