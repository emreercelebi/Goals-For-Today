import React from 'react';

import TeamTaskbar from './components/TeamTaskbar';
import ToDoList from './components/ToDoList';

const HomePage = () => (
  <div className='Home'>
    <TeamTaskbar />
    <ToDoList />
    {/* <CommentSection /> */}
  </div>
);

export default HomePage;