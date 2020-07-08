require('./styles/main.scss');
import React, { Component } from "react";
import ReactDOM from "react-dom";

import Login from './js/components/Login.js';

const wrapper = document.querySelector("#container");

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

wrapper && ReactDOM.render(<App />, wrapper);