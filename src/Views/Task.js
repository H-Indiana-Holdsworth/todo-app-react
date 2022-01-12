import React from 'react';
import { useState, useEffect } from 'react';
import TaskForm from '../Components/TaskForm';
import TaskList from '../Components/TaskList';
import { getTasks } from '../services/task';
import { logout } from '../services/users';

export default function Task({ setCurrentUser }) {
  const [task, setTask] = useState({});
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [completeTask, setCompleteTask] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = getTasks();
      setTask(data);
      setLoading(false);
    };
    fetchData();
  }, [loading]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div>
      <TaskForm />
      <TaskList />
    </div>
  );
}
