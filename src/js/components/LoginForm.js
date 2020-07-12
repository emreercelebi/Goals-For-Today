import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

import { FormFieldHelper } from './common/helpers';

class LoginForm extends Component {
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

  handleLogin() {
    //TODO: implement
    alert('you clicked the login button');
  }

  render() {
    return (
      <Form className="Login-form">
        <FormFieldHelper baseClass='Login' idPrefix='login' name='email' onChange={this.handleEmailChange} />
        <FormFieldHelper baseClass='Login' idPrefix='login' name='password' type='password' onChange={this.handlePasswordChange} />
        <Button positive className="Login-submit" type='submit' onClick={this.handleLogin}>Login</Button>
      </Form>
    );
  }
}

export default LoginForm;