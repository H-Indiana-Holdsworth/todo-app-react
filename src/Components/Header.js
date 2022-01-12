import React from 'react';
import classNames from 'classnames';

export default function Header({ type, setType }) {
  return (
    <div>
      <p>Type: {type}</p>
      <h3
        onClick={() => {
          setType('Sign In');
        }}
        className={classNames({ active: type === 'Sign In' })}
      >
        Sign In
      </h3>
      <h3
        onClick={() => {
          setType('Sign Up');
        }}
        className={classNames({ active: type === 'Sign Up' })}
      >
        Sign Up
      </h3>
    </div>
  );
}
