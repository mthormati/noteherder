import React from 'react';
import './Icons.css'
import './SignOut.css'

const SignOut = ({ signOut}) => {
  return (
    <button className="SignOut no-outline" onClick={signOut}>
      <i className="blue icon fa fa-sign-out" aria-hidden="true"></i>
    </button>
  );
};

export default SignOut