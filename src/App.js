import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'; 

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
  
  componentWillMount() {
    this.getUserFromLocalStorage();
    auth.onAuthStateChanged((user) => {
      if (user) {
        //Finished signing in
        this.authHandler(user)
      } else {
        //Finished signing out
        this.setState({ uid: null })
      }
    })
  }

  getUserFromLocalStorage() {
    const uid = localStorage.getItem('uid');
    if (!uid) return;
    this.setState({ uid });
  }
  

  syncNotes = () => {
    this.ref = base.syncState(
      `notes/${this.state.uid}`,
      {
        context: this,
        state: 'notes',
      }
    )
  }

  signedIn = () => {
    return this.state.uid;
  }

  signOut = () => {
    auth
      .signOut()
      .then(() => {
        //Stop syncing with firebase
        this.stopSyncing();
        this.setState({ notes: {} });
      })
  }

  stopSyncing = () => {
    if (this.ref)
      base.removeBinding(this.ref)
  }

  authHandler = (user) => {
    localStorage.setItem('uid', user.uid);
    this.setState(
      { uid: user.uid },
      this.syncNotes  
    )
  }

  //Methods to update notes
  deleteNote = (e) => {
    this.createNewNote()

    Object.keys(this.state.notes).map((noteId) => {
      if (this.state.note.id === noteId) {
        const notes = {...this.state.notes};
        notes[noteId] = null;
        this.setState({ notes });
        this.props.history.push('/notes');
      }
    })
  }

  setCurrentNote = (note) => {
    this.setState({ note });
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
    let shouldRedirect = false;
    if (!note.id) {
      note.id = `note-${Date.now()}`;
      shouldRedirect = true;
    }
    const notes = {...this.state.notes}
    notes[note.id] = note
    this.setState({ notes })
    if (shouldRedirect) {
      this.props.history.push(`/notes/${note.id}`);
    }
  }

  render() {
    const actions = {
      createNewNote: this.createNewNote,
      saveNote: this.saveNote,
      updateNote: this.updateNote,
      populateForm: this.populateForm,
      deleteNote: this.deleteNote,
      signOut: this.signOut,
      setCurrentNote: this.setCurrentNote,
    };
    const noteData = {
      notes: this.state.notes,
      note: this.state.note,
    }

    return (
      <div className="App">
        <Switch>
          <Route path="/notes" render={() => (
            this.signedIn() 
            ? <Main 
                {...noteData}
                {...actions}
              />
            : <Redirect to="/sign-in" component={SignIn}/>
          )}/>
          <Route path="/sign-in" render={() => (
            this.signedIn()
            ? <Redirect to="/notes" />
            : <SignIn />
          )}/>
          <Route render={() => <Redirect to="/notes"/>} />
        </Switch>        
      </div>
    );
  }
}

export default App;

