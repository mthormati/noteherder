import React, { Component } from 'react';
import './App.css';
import Main from './Main'
import SignIn from './SignIn'
import SignOut from './SignOut'
import base, {auth} from './base'

class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: {

      },
      note: this.blankNote(),
      uid: null,
    }
  }

  syncNotes = () => {
    base.syncState(
      `${this.state.uid}/notes`,
      {
        context: this,
        state: 'notes',
      }
    )
  }

  signedIn = () => {
    return this.state.uid
  }

  signOut = () => {
    auth
      .signOut()
      .then(this.setState({ uid: null }))
  }

  authHandler = (user) => {
    this.setState(
      { uid: user.uid },
      this.syncNotes  
    )
  }

  renderMain = () => {
    return (
      <div>
        <SignOut signOut={this.signOut}/>
        <Main notes={this.state.notes} 
              note={this.state.note} 
              createNewNote={this.createNewNote} 
              saveNote={this.saveNote} 
              updateNote={this.updateNote}
              populateForm={this.populateForm}
              deleteNote={this.deleteNote}
        />
      </div>
    )
  }

  //Methods to update notes
  deleteNote = (e) => {
    this.createNewNote()

    Object.keys(this.state.notes).map((noteId) => {
      if (this.state.note.id === noteId) {
        delete this.state.notes[noteId]
      }
    })
  }

  populateForm = (e) => {
    this.createNewNote()
    document.querySelector('.delete').style.visibility = "visible"

    Object.keys(this.state.notes).map((noteId) => {
      if (e.currentTarget.dataset.key === noteId) {
        this.setState({ note : this.state.notes[noteId] }) 
      }
    })
  }

  createNewNote = () => {
    document.querySelector('.delete').style.visibility = "hidden"; 
    this.setState({ note: this.blankNote() })
  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  updateNote = (text, targetName) => {
    const note = {...this.state.note}
    note[targetName] = text
    this.setState(
      { note },
      () => { this.saveNote(this.state.note) }
    )    
  }

  saveNote = (note) => {
    if (!note.id) {
      note.id = `note-${Date.now()}`
    }
    const notes = {...this.state.notes}
    notes[note.id] = note
    this.setState({ notes })
  }

  render() {
    return (
      <div className="App">
        { this.signedIn() ? this.renderMain() : <SignIn authHandler={this.authHandler}/> }
      </div>
    )
  }
}

export default App;
