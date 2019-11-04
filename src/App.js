import React from 'react';
import List from './components/List';
import Button from './components/Button';

import './App.css';

function App() {
  return (
    <div className="App">
      <h3>Hello World! What Do I Need To Do?</h3>
      <List />
      <button>Add Task Button</button>
      <Button buttonLabel="Add A New Todo" />
    </div>
  );
}

export default App;
