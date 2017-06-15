import React, { Component } from 'react';
import './App.css';
import Main from './Main'

class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: {
        'note-1': {
          id: 'note-1',
          title: 'This is a title',
          body: 'This is the body of a note',
        },
        'note-2': {
          id: 'note-2',
          title: 'State and props?',
          body: 'Wat',
        }
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Main notes={this.state.notes} />
      </div>
    )
  }
}

export default App;
