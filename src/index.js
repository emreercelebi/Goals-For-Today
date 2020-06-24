require('./styles/main.scss');
import Form from './js/components/Form.js';
import React from "react";
import ReactDOM from "react-dom";

const wrapper = document.querySelector("#container");
wrapper && ReactDOM.render(<Form />, wrapper);