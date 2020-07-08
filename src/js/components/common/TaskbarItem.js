import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

import Text from './Text';

class TaskbarItem extends Component {
  render() {
    return (
      <div className="TaskbarItem">
        <Icon name={this.props.icon} />
        <Text baseClass="TaskbarItem">{this.props.children}</Text>
      </div>
    );
  }
}

export default TaskbarItem;