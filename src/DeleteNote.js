import React from 'react';
import './Icons.css'

const DeleteNote = ({ deleteNote }) => {
  return (
    <button className="new-note delete" onClick={deleteNote}>
      <i className="red icon fa fa-minus" aria-hidden="true"></i>
    </button>
  );
};

export default DeleteNote