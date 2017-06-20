import React from 'react';
import './Icons.css'

const AddNew = ({ createNewNote }) => {
  return (
    <button className="new-note" onClick={createNewNote}>
      <i className="blue icon icon fa fa-plus" aria-hidden="true"></i>
    </button>
  );
};

export default AddNew