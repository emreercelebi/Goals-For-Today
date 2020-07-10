import React from 'react';

import Heading from './components/common/Heading';
import LoginForm from './components/LoginForm';
import Text from './components/common/Text';

const LoginPage = () => {
  return (
    <div className='Login'>
      <Heading hLevel={1} baseClass='Login'>Goals For Today</Heading>
      <Text baseClass='Login'>Login to Your Account</Text>
      <LoginForm />
    </div>
  )
}

export default LoginPage;