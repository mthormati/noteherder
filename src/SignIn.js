import React from 'react';
import './SignIn.css'
import { auth, githubProvider, googleProvider } from './base'

const SignIn = () => {
  const authenticate = (e) => {
    if (e.currentTarget.id === "github") {
      auth.signInWithPopup(githubProvider)
    } else {
      auth.signInWithPopup(googleProvider)
    }
  }

  return (
    <div>
      <button id="github" className="SignIn" onClick={authenticate}>
        Github Sign In 
      </button>
      <button id="google" className="SignIn" onClick={authenticate}>
        Google Sign In 
      </button>
    </div>
  )
}

export default SignIn