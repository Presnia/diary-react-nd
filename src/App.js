import './App.css';
import Header from "./components/Header/Header";
import NotesField from "./components/NotesField/NotesField";
import ModalWindow from "./components/ModalWindow/ModalWindow";

function App() {
  return (
    <div className="App">
      <Header/>
      <NotesField/>
      <ModalWindow/>
    </div>
  );
}

export default App;
