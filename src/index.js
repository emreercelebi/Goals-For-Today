require('./styles/main.scss');
import React, { Component } from "react";
import ReactDOM from "react-dom";

import LoginPage from './js/Loginpage.js';

const wrapper = document.querySelector("#container");

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginPage />
      </div>
    );
  }
}

wrapper && ReactDOM.render(<App />, wrapper);