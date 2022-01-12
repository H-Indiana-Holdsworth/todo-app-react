import React from 'react';

export default function AuthForm({
  email,
  setEmail,
  password,
  setPassword,
  errorMessage,
  handleSubmit,
}) {
  return (
    <div>
      <h1>Auth Page</h1>
      <form>
        <h2>{errorMessage}</h2>
        <label>Email: </label>
        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password: </label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
}
