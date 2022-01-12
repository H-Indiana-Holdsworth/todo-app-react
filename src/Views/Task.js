import React from 'react';
import { useState, useEffect } from 'react';
import TaskForm from '../Components/TaskForm';
import TaskList from '../Components/TaskList';
import { createTask, getTasks, toggleComplete } from '../services/task';
import { logout } from '../services/users';

export default function Task({ setCurrentUser }) {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTasks();
      setTaskList(data);

      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resp = await createTask(task);

    setTask('');

    setTaskList((prev) => [...prev, resp[0]]);
  };

  const handleClick = async (task) => {
    await toggleComplete(task.id, !task.is_complete);

    const resp = await getTasks();
    setTaskList(resp);
  };

  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div>
      <TaskList taskList={taskList} setTaskList={setTaskList} handleClick={handleClick} />
      <TaskForm handleSubmit={handleSubmit} task={task} setTask={setTask} />
      <button onClick={logoutUser}>Log Out</button>
    </div>
  );
}
