import React from 'react'
import './NoteList.css'
import Note from './Note'

const NoteList = ({ notes, populateForm }) => {
    return (
        <div className="NoteList">
            <h3>Notes</h3>
            <ul id="notes"> 
                {Object.keys(notes).map((noteId) => {
                    return <Note key={noteId} id={noteId} note={notes[noteId]} populateForm={populateForm}/>
                })}
            </ul>
        </div>        
    )
}

export default NoteList