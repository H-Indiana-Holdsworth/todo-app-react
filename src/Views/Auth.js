import React from 'react';
import { useState } from 'react';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState();
  const [type, setType] = useState('Sign In');

  return (
    <div>
      <h1>Auth Page</h1>
    </div>
  );
}
