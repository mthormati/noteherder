import React from 'react';
import './Icons.css'

const SignOut = ({ signOut}) => {
  return (
    <button className="SignOut" onClick={signOut}>
      <i className="blue icon fa fa-sign-out" aria-hidden="true"></i>
    </button>
  );
};

export default SignOut