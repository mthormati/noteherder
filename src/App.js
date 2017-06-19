import React, { Component } from 'react';
import './App.css';
import Main from './Main'

class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: {

      },
      note: this.blankNote(),
    }
  }

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
}

export default App;
