import './App.css';
import Header from "./components/Header/Header";
import NotesField from "./components/NotesField/NotesField";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import AddNoteField from "./components/AddNotePage/AddNotePage";

function App() {
  return (
    <div className="App">
      <Header />
      <NotesField />
      <AddNoteField />
      <ModalWindow />
    </div>
  );
}

export default App;
