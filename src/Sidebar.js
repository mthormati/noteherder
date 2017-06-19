import React from 'react';
import quill from './quill.svg'
import newHover from './new-hover-dark.png'
import deleteHover from './delete-hover-dark.png'
import newIcon from './new-dark.png'
import deleteIcon from './delete-dark.png'
import './Sidebar.css'

const Sidebar = (props) => {
    return (
      <nav className="Sidebar">
        <div className="logo">
          <img src={quill} alt="Noteherder" />
        </div>
        <button className="new-note" onClick={props.createNewNote}>
          <img src={newHover} alt="New note" />
          <img className="outline" src={newIcon} alt="New note" />
        </button>
        <button className="new-note delete" onClick={props.deleteNote}>
          <img src={deleteHover} alt="New note" />
          <img className="outline" src={deleteIcon} alt="New note" />
        </button>
      </nav>
    )
};

export default Sidebar;