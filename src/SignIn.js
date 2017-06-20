import React from 'react';
import './SignIn.css'
import { auth, githubProvider, googleProvider } from './base'
import Particles from 'react-particles-js'
const particles = require('./particles.json')

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
      <Particles params={ particles } style={{position: "absolute"}}/>
      <div id="button-container">
        <button id="github" className="SignIn" onClick={authenticate}>
          Github Sign In 
        </button>
        <button id="google" className="SignIn" onClick={authenticate}>
          Google Sign In 
        </button>
      </div>
    </div>
  )
}

export default SignIn