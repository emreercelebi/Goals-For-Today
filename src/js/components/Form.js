import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
      <div className="Form">
        <form className="Form-form">
          <input
            type="text"
            onChange={this.handleChange}
          />
        </form>
        <div className="Form-output">
          Your current input is [alex text]: {this.state.value}
        </div>
        <br/>
        <button className="ui primary button" onClick={() => alert("hello!!")} >
          CLICK ME
        </button>
      </div>
    )
  }
}

export default Form;
