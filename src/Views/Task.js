import React from 'react';
import { useState, useEffect } from 'react';
import TaskForm from '../Components/TaskForm';
import TaskList from '../Components/TaskList';
import { createTask, getTasks } from '../services/task';
import { logout } from '../services/users';

export default function Task({ setCurrentUser }) {
  const [task, setTask] = useState({});
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [completeTask, setCompleteTask] = useState(false);

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

    try {
      await createTask(task);
      alert('Task succesfully added!');
    } catch (e) {
      alert('Error, task not created.');
    }
  };

  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div>
      <TaskForm handleSubmit={handleSubmit} task={task} setTask={setTask} />
      <TaskList taskList={taskList} setTaskList={setTaskList} />
      <button onClick={logoutUser}>Log Out</button>
    </div>
  );
}
