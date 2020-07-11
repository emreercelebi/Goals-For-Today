import React from 'react';

import Heading from './components/common/Heading';
import Text from './components/common/Text';
import CreateAccountForm from './components/CreateAccountForm';

const CreateAccountPage = () => (
  <div className="CreateAccount">
    <Heading hLevel={1} baseClass='CreateAccount'>Goals for today</Heading>
    <Text baseClass='CreateAccount'>Create Account</Text>
    <CreateAccountForm />
  </div>
);

export default CreateAccountPage;