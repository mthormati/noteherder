import React from 'react'

const Note = ({ id, note, populateForm }) => {
    return (
        <li>
            <div data-key={id} className="note" onClick={populateForm}>
                <div className="note-title">
                    {note.title}
                </div>
                <div className="note-body">
                <p>
                    {note.body}
                </p>
                </div>
            </div>
        </li>
    )
}

export default Note