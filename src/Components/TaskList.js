import React from 'react';

export default function TaskList({ taskList, handleClick }) {
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
        </ul>
      ))}
    </div>
  );
}
