import React, { Component } from 'react';

import TaskbarItem from './common/TaskbarItem';

const testUsers = [
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

class TeamTaskbar extends Component {
  render() {
    return (
      <div className="TeamTaskbar">
        <div className="TeamTaskbar-members">
          {testUsers.map( (user, index) => <TaskbarItem key={index} icon='user'>{user.name}</TaskbarItem>)}
        </div>
      </div>
    )
  }
}

export default TeamTaskbar;