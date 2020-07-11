import React, { Component } from 'react';
import { Button, Form, Icon } from 'semantic-ui-react';

import { USER_ICON, EDIT_ICON } from './common/constants';
import Heading from './common/Heading';
import Text from './common/Text';

//TODO these should be determined by the currently selected todo item via redux
const testHeading = 'Comments';
const testSubHeading = 'These are some comments';
const testComments = [
  {
    user: 'Alexandra',
    body: 'Great stuff. Really top notch work here.'
  },
  {
    user: 'Kelly',
    body: 'The Goals For Today team is without a doubt the best team.'
  },
  {
    user: 'Emre',
    body: 'Did you know the Hoos are STILL defending NCAA men\'s basketball champs???? No I will never get over it :) :) :) :)'
  }
]

class Comments extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='Comments'>
        <Heading baseClass='Comments' hLevel={2}>
          {testHeading}
        </Heading>
        <Heading baseClass='Comments' hLevel={4}>
          {testSubHeading}
        </Heading>
        <div className='Comments-list'>
          {testComments.map( (comment, index) => (
            <Comment 
              key={index} 
              user={comment.user} 
              body={comment.body} 
            />
          ))}
        </div>
        <CommentForm />
      </div>
    )
  }
}

const Comment = (props) => {
  return (
    <div className='Comment'>
      <Icon className='Comment-userIcon' name={USER_ICON} size='large'/>
      <div className='Comment-contentWrapper'>
        <div className='Comment-top'>
          <Heading baseClass='Comment' hLevel={5}>
            {props.user}
          </Heading>
          <span className="Comment-timestamp">
            {/* TODO: put timestamp here */}
          </span>
        </div>
        <Text baseClass='Comments'>
          {props.body}
        </Text>
      </div>
    </div>
  )
}

const CommentForm = (props) => {
  return (
    <Form className="Comment-form" reply>
      <Form.TextArea />
      <Button content='Add Reply' labelPosition='left' icon={EDIT_ICON} primary />
    </Form>
  )
}

export default Comments;
