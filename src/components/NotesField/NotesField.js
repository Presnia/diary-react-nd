import './NotesField.css';
import React from 'react';
import Note from "../Note/Note";

const NotesField = () => {
  return (
    <div className="notes">
      <Note style={{
        backgroundImage: `url("https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?cs=srgb&dl=pexels-pok-rie-132037.jpg&fm=jpg")`}}/>
      <Note style={{
        backgroundImage: `url("https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg")`}}/>
      <Note style={{
        backgroundImage: `url("https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=pexels-pixabay-36717.jpg&fm=jpg")`}}/>
      <Note style={{
        backgroundImage: `url("https://images.pexels.com/photos/230629/pexels-photo-230629.jpeg?cs=srgb&dl=pexels-dianne-230629.jpg&fm=jpg")`}}/>
    </div>
  )
}

export default NotesField;