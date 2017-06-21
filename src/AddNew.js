import React from 'react';
import { Link  } from 'react-router-dom'
import './Icons.css'

const AddNew = ({ createNewNote }) => {
  return (
    <Link to="/notes">
      <button className="new-note no-outline" onClick={createNewNote}>
        <i className="blue icon icon fa fa-plus" aria-hidden="true"></i>
      </button>
    </Link>
  );
};

export default AddNew