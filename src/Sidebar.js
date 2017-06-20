import React from 'react';

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

        <SignOut signOut={props.signOut}/>

        <AddNew createNewNote={props.createNewNote}/>

        <DeleteNote deleteNote={props.deleteNote}/>
      </nav>
    )
};

export default Sidebar;