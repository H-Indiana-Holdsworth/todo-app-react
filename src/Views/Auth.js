import React from 'react';
import { useState } from 'react';
import AuthForm from '../Components/AuthForm';
import Header from '../Components/Header';
import { signInUser, signUpUser } from '../services/users';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState();
  const [type, setType] = useState('Sign In');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp =
        type === 'Sign In' ? await signInUser(email, password) : await signUpUser(email, password);
      setType(resp);
    } catch (e) {
      setErrorMessage('Something went wrong, please try again');
    }
  };

  return (
    <div>
      <Header type={type} setType={setType} />
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
