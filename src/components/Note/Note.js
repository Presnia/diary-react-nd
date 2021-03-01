import './Note.css';
import Emoji from "a11y-react-emoji";

const Note = ({style}) => {
  return (
    <div className="note" style={style}>
      <section className="mood-circle_box">
        <span className="mood-circle">
          <span className="mood-emoji">
            <Emoji symbol="🤔" label="thinking"/>
          </span>
        </span>
      </section>
      <div className="description-container">
        <div className="description-header">
          <span className="description-title">The lake of my dream</span>
          <span className="description-date">Mon 1 March</span>
        </div>
        <p className="description-text_note">Today I felt something new...</p>
      </div>
    </div>
  )
}

export default Note;