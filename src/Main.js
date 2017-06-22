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
            <NoteList notes={props.notes}/>

            <Switch>
                <Route path="/notes/:id" render={(navProps) => (
                    <NoteForm {...props} {...navProps}/>
                )}/>
                <Route path="/notes" render={(navProps) => (
                    <NoteForm {...props} {...navProps}/>
                )}/>
            </Switch>
        </div>
    )
}

export default Main