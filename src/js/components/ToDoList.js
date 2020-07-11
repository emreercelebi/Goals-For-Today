import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

import { ADD_ICON, EDIT_ICON, TRASH_ICON } from './common/constants'
import Heading from './common/Heading';
import IconButton from './common/IconButton';
import Text from './common/Text';
import { FormFieldHelper } from './common/helpers';

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
      selected: null,
      showAddModal: false,
      newTaskName: '',
      newTaskDescription: ''
    }

    this.selectItem = this.selectItem.bind(this);
    this.handleNewTaskNameChange = this.handleNewTaskNameChange.bind(this);
    this.handleNewTaskDescriptionChange = this.handleNewTaskDescriptionChange.bind(this);
    this.openAddModal = this.openAddModal.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  selectItem(index) {
    this.setState({
      selected: index
    });
  }

  openAddModal() {
    this.setState(prevState => ({
      ...prevState,
      showAddModal: true,
      newTaskName: '',
      newTaskDescription: '',
    }));
  }

  handleNewTaskNameChange(event) {
    const { value } = event.target;
    this.setState(prevState => ({
      ...prevState,
      newTaskName: value
    }));
  }

  handleNewTaskDescriptionChange(event) {
    const { value } = event.target;
    this.setState(prevState => ({
      ...prevState,
      newTaskDescription: value
    }));
  }

  handleAddTask() {
    //TODO: implement
    alert('you clicked the submit new task button');
  }

  handleCancel() {
    this.setState(prevState => ({
      ...prevState,
      showAddModal: false
    }));
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
        <IconButton baseClass='ToDoList' color='green' icon={ADD_ICON} onClick={this.openAddModal} />
        {this.state.showAddModal
          ? <AddToDoForm 
              handleAddTask={this.handleAddTask} 
              handleNewTaskNameChange={this.handleNewTaskNameChange}
              handleNewTaskDescriptionChange={this.handleNewTaskDescriptionChange}
              handleCancel={this.handleCancel}
            />
          : null}
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

const AddToDoForm = (props) => {
  return (
    <div className="ToDoList-overlay">
      <div className="ToDoList-formWrapper">
        <Form className='ToDoList-form'>
          <Heading hLevel={2} baseClass='ToDoList'>Add New Task</Heading>
          <FormFieldHelper baseClass='ToDoList' idPrefix='todo' name='task name' onChange={props.handleNewTaskNameChange} />
          <Form.TextArea className='ToDoList-taskDescription' placeholder='task description' onChange={props.handleNewTaskDescriptionChange} />
          <div className="ToDoList-addFormButtons">
            <Button negative className='ToDoList-cancel' type='button' onClick={props.handleCancel}>Cancel</Button>
            <Button positive className='ToDoList-submit' type='submit' onClick={props.handleAddTask}>Submit</Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default ToDoList;