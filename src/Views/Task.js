import React from 'react';
import { logout } from '../services/users';

export default function Task({ setCurrentUser }) {
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
