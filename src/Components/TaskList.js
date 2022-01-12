import React from 'react';

export default function TaskList({ taskList }) {
  return (
    <div>
      {taskList.map((item) => (
        <ul key={item.id}>
          <li>{item.task}</li>
        </ul>
      ))}
    </div>
  );
}
