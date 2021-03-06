import React from 'react';
import { Route } from 'react-router-dom'

import quill from './quill.svg'
import SignOut from './SignOut'
import AddNew from './AddNew'
import DeleteNote from './DeleteNote'
import './Sidebar.css'

const Sidebar = (props) => {
    return (
      <nav className="Sidebar">
        <div className="logo">
          <img src={quill} alt="Noteherder" />
        </div>

        <AddNew />

        <Route path='/notes/:id' render={() => <DeleteNote deleteNote={props.deleteNote}/>} />

        <SignOut signOut={props.signOut}/>
      </nav>
    )
};

export default Sidebar;