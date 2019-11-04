import React from 'react';
import Button from './Button';

function Task() {
  return (
    <div className="Task">
      <span>This is a task.</span>
      <br />
      <div>
        <Button buttonLabel="Edit" />
        <Button buttonLabel="Delete" />
      </div>
    </div>
  );
}

export default Task;
