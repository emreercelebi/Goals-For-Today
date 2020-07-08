import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

import Heading from './common/Heading';
import Text from './common/Text';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailInput: '',
      passwordInput: '' //TODO: this is a suuuuper insecure way of getting user's password. anyone with react chrome devtools could see it. definitely something we can improve on
    }

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(event) {
    const { value } = event.target;
    this.setState(prevState => ({
      ...prevState,
      emailInput: value
    }));
  }

  handlePasswordChange(event) {
    const { value } = event.target;
    this.setState(prevState => ({
      ...prevState,
      passwordInput: value
    }));
  }

  render() {
    return (
      <div className="Login">
        <Heading hLevel={1} baseClass="Login">Goals For Today</Heading>
        <Text baseClass="Login">Login to Your Account</Text>
        <Form className="Login-form">
          <Form.Field className="Login-field">
            <label className="Login-label" htmlFor="login-email">email</label>
            <input placeholder="email" id="login-email" onChange={this.handleEmailChange} />
          </Form.Field>
          <Form.Field className="Login-field">
            <label className="Login-label" htmlFor="login-password">password</label>
            <input placeholder="password" id="login-password" type="password" onChange={this.handlePasswordChange} />
          </Form.Field>
          <Button positive className="Login-submit" type='submit'>Login</Button>
        </Form>
      </div>
    );
  }
}

export default Login;