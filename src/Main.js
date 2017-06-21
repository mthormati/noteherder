import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import './Main.css'

const Main = (props) => {
    return (
        <div className="Main">
            <Sidebar createNewNote={props.createNewNote.bind(this)} deleteNote={props.deleteNote.bind(this)} signOut={props.signOut}/>
            <NoteList notes={props.notes} populateForm={props.populateForm}/>

            <Switch>
                <Route path="/notes/:id" render={(navProps) => (
                    <NoteForm saveNote={props.saveNote.bind(this)} notes={props.notes} note={props.note} updateNote={props.updateNote.bind(this)} {...navProps}/>
                )}/>
                <Route path="/notes" render={(navProps) => (
                    <NoteForm exact saveNote={props.saveNote.bind(this)} notes={props.notes} note={props.note} updateNote={props.updateNote.bind(this)} {...navProps}/>
                )}/>
            </Switch>
        </div>
    )
}

export default Main