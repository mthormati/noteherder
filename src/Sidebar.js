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

        <AddNew />

        <DeleteNote deleteNote={props.deleteNote}/>

        <SignOut signOut={props.signOut}/>
      </nav>
    )
};

export default Sidebar;