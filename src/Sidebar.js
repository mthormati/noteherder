import React, { Component } from 'react';
import quill from './quill.svg'
import newHover from './new-hover-dark.png'
import deleteHover from './delete-hover-dark.png'
import newIcon from './new-dark.png'
import deleteIcon from './delete-dark.png'
import './Sidebar.css'


class Sidebar extends Component {

  clickHandler = (e) => {
    e.preventDefault()
    this.props.createNewNote()
  }

  render() {
    return (
      <nav className="Sidebar">
        <div className="logo">
          <img src={quill} alt="Noteherder" />
        </div>
        <button className="new-note" onClick={this.clickHandler}>
          <img src={newHover} alt="New note" />
          <img className="outline" src={newIcon} alt="New note" />
        </button>
        <button className="new-note" onClick={this.clickHandler}>
          <img src={deleteHover} alt="New note" />
          <img className="outline" src={deleteIcon} alt="New note" />
        </button>
      </nav>
    )
  }
}

export default Sidebar;