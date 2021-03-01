import React from 'react';
import FetchData from "./service/FetchData";
import './App.css';
import Header from "./components/Header/Header";
import NotesField from "./components/NotesField/NotesField";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import AddNotePage from "./components/AddNotePage/AddNotePage";

class Diary extends React.Component {

  fetchData = new FetchData();

  state = {
    title: '',
    description: '',
    picture: [],
    date: null,
    mood: null,
  };

  componentDidMount() {
    this.fetchData.getImages()
      .then(data => console.log(data))
  }

  render () {
    return (
      <div className="App">
        <Header />
        <NotesField />
        <AddNotePage />
        <ModalWindow />
      </div>
    );
  }

}

export default Diary;
