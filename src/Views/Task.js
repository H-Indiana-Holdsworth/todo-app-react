import React from 'react';
import { useState, useEffect } from 'react';
import { logout } from '../services/users';

export default function Task({ setCurrentUser }) {
  const [task, setTask] = useState({});
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [completeTask, setCompleteTask] = useState(false);

  useEffect(() => {
    const getTasks
    return () => {
      cleanup
    }
  }, [input])

  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div>
      <h1>Task page</h1>
    </div>
  );
}
