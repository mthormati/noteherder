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

  createNewNote = () => {
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
        />
      </div>
    )
  }
}

export default App;
