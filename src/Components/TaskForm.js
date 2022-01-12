import React from 'react';

export default function TaskForm({ task, setTask, handleSubmit }) {
  return (
    <div>
      <form>
        <label>Add a task: </label>
        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
}
