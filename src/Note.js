import React from 'react'
import { NavLink } from 'react-router-dom'

const Note = ({ id, note }) => {
    return (
        <NavLink to={`/notes/${note.id}`}>
            <li>
                <div data-key={id} className="note">
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
        </NavLink>
    )
}

export default Note