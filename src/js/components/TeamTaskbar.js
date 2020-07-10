import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

import Text from './common/Text';
import IconButton from './common/IconButton';

const USER = 'user';
const GROUP = 'group';
const SIGN_OUT = 'sign-out';
const SETTING = 'setting';

const testUsers = [ //TODO: replace with real data from database
  {
    name: 'Emre'
  },
  {
    name: 'Kelly'
  },
  {
    name: 'Alexandra'
  }
];

const testTeamName = 'Team Quasar'; //TODO: replace with real data from database

class TeamTaskbar extends Component {

  handleLogout() {
    //TODO: implement
    alert('You clicked the logout button');
  }

  handleSettings() {
    //TODO: implement
    alert('You clicked the settings button');
  }

  render() {
    return (
      <div className='TeamTaskbar'>
        <div className='TeamTaskbar-members'>
          {testUsers.map( (user, index) => <TaskbarItem key={index} icon={USER}>{user.name}</TaskbarItem>)}
        </div>
        <div className='TeamTaskbar-bottom'>
          <TaskbarItem icon={GROUP}>{testTeamName}</TaskbarItem>
          <div className='TeamTaskbar-buttons'>
            <IconButton baseClass='TeamTaskbar' onClick={this.handleLogout} icon={SIGN_OUT} />
            <IconButton baseClass='TeamTaskbar' onClick={this.handleSettings} icon={SETTING} />
          </div>
        </div>
      </div>
    )
  }
}

const TaskbarItem = (props) => {

  return (
    <div className='TaskbarItem'>
      <Icon className='TaskbarItem-icon' name={props.icon} size='large' />
      <Text baseClass='TaskbarItem'>{props.children}</Text>
    </div>
  );
}

export default TeamTaskbar;