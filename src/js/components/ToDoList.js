import React, { Component } from 'react';
import { Checkbox } from 'semantic-ui-react';

import { EDIT_ICON, TRASH_ICON } from './common/constants'
import Heading from './common/Heading';
import IconButton from './common/IconButton';
import Text from './common/Text';

const testTodos = [ //TODO: replace with data from database
  {
    description: 'Create a react layout'
  },
  {
    description: 'Create a database'
  },
  {
    description: 'learn to interact with the database'
  }
]

class ToDoList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: 0
    }

    this.selectItem = this.selectItem.bind(this);
  }

  selectItem(index) {
    this.setState({
      selected: index
    });
  }

  render() {
    return (
      <div className='ToDoList'>
        <Heading baseClass='ToDoList' hLevel={1}>
          To do list for today
        </Heading>
        <div className='ToDoList-items'>
          {testTodos.map( (item, index) => (
            <ToDoItem 
              key={index} 
              id={index} 
              selected={this.state.selected == index} 
              description={item.description} 
              onClick={this.selectItem}
            />
          ))}
        </div>
      </div>
    )
  }
}

class ToDoItem extends Component {

  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit() {
    //TODO: implement
    alert(`You pressed the edit button of item number ${this.props.id}`);
  }

  handleDelete() {
    //TODO: implement
    alert(`You pressed the delete button of item number ${this.props.id}`);
  }

  render() {
    const topLevelClass = this.props.selected ? 'ToDoItem ToDoItem--selected' : 'ToDoItem';

    return (
      <div className={topLevelClass} onClick={() => this.props.onClick(this.props.id)}>
        <div className='ToDoItem-container'>
          <Checkbox />
          <Text baseClass='ToDoItem'>
            {this.props.description}
          </Text>
        </div>
        <div className='ToDoItem-buttons'>
          <IconButton baseClass='ToDoItem' onClick={this.handleEdit} icon={EDIT_ICON} size='large' />
          <IconButton baseClass='ToDoItem' onClick={this.handleDelete} icon={TRASH_ICON} size='large' />
        </div>
      </div>
    )
  }
}

export default ToDoList;