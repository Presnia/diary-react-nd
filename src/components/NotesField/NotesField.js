import './NotesField.css';
import React from 'react';
import Note from "../Note/Note";

const NotesField = () => {
  return (
    <div className="notes">
      <Note/>
      <Note/>
      <Note/>
      <Note/>
    </div>
  )
}

export default NotesField;