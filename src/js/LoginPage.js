import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

import Heading from './components/common/Heading';
import Text from './components/common/Text';
import LoginForm from './components/LoginForm';

const LoginPage = () => {
  return (
    <div className="Login">
      <Heading hLevel={1} baseClass="Login">Goals For Today</Heading>
      <Text baseClass="Login">Login to Your Account</Text>
      <LoginForm />
    </div>
  )
}

export default LoginPage;