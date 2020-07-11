require('./styles/main.scss');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CreateAccountPage from './js/CreateAccountPage.js';
import LoginPage from './js/Loginpage.js';
import HomePage from './js/HomePage.js';

const wrapper = document.querySelector('#container');

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route path='/home' component={HomePage} />
          <Route path='/create-account' component={CreateAccountPage} />
        </Switch>
      </div>
    </Router>
  );
}

wrapper && ReactDOM.render(<App />, wrapper);