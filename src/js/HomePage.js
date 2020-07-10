import React from 'react';

import Comments from './components/Comments';
import TeamTaskbar from './components/TeamTaskbar';
import ToDoList from './components/ToDoList';

const HomePage = () => (
  <div className='Home'>
    <TeamTaskbar />
    <ToDoList />
    <Comments />
  </div>
);

export default HomePage;