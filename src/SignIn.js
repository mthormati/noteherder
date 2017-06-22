import React from 'react';
import './SignIn.css'
import quill from './quill.svg'
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

      <div id="button-container" className="animated fadeInDown">

        <div className="logo">
          <img src={quill} alt="Noteherder" />
        </div>

        <div id="title">NoteHerder</div>

        <button id="github" className="SignIn" onClick={authenticate}>
          <i className="icon-signin fa fa-github" aria-hidden="true"></i>
          Sign in with Github
        </button>
        <button id="google" className="SignIn" onClick={authenticate}>
          <i className="icon-signin fa fa-google" aria-hidden="true"></i>
          Sign in with Google
        </button>
      </div>
    </div>
  )
}

export default SignIn