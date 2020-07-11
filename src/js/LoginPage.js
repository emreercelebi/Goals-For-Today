import React from 'react';

import Heading from './components/common/Heading';
import Link from './components/common/Link';
import LoginForm from './components/LoginForm';
import Text from './components/common/Text';

const LoginPage = () => {
  return (
    <div className='Login'>
      <Heading hLevel={1} baseClass='Login'>Goals For Today</Heading>
      <Text baseClass='Login'>Login to Your Account</Text>
      <LoginForm />
      <Link baseClass='Login' href='/create-account'>
        New? Create an account!
      </Link>
    </div>
  )
}

export default LoginPage;