import React from 'react';

export default function TaskList({ taskList, handleClick, handleDelete }) {
  return (
    <div>
      {taskList.map((item) => (
        <ul key={item.id}>
          <li>
            <input
              type="checkbox"
              checked={item.is_complete}
              onChange={() => {
                handleClick(item);
              }}
            />
            {item.task}
          </li>
          <button onClick={() => handleDelete(item.id)}>Delete Task</button>
        </ul>
      ))}
    </div>
  );
}
