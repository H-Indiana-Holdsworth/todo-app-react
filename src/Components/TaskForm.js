import React from 'react';

export default function TaskForm({ setTask, handleSubmit }) {
  return (
    <div>
      <form>
        <label>Add a task: </label>
        <input type="text" name="task" value="task" onChange={(e) => setTask(e.target.value)} />
        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
}
