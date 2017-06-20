import React from 'react'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import './Main.css'

const Main = (props) => {
    return (
        <div className="Main">
            <Sidebar createNewNote={props.createNewNote.bind(this)} deleteNote={props.deleteNote.bind(this)} signOut={props.signOut}/>
            <NoteList notes={props.notes} populateForm={props.populateForm}/>
            <NoteForm saveNote={props.saveNote.bind(this)} note={props.note} updateNote={props.updateNote.bind(this)}/>
        </div>
    )
}

export default Main