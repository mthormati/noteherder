import React from 'react';
import { Link } from 'react-router-dom'
import './Icons.css'

const AddNew = () => {
  return (
    <Link to="/notes">
      <button className="new-note no-outline">
        <i className="blue icon icon fa fa-plus" aria-hidden="true"></i>
      </button>
    </Link>
  );
};

export default AddNew