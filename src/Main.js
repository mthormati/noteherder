import React from 'react'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import './Main.css'

const Main = () => {
    return (
        <div className="Main">
            <NoteList />
            <Sidebar />
            <NoteForm />
        </div>
    )
}

export default Main