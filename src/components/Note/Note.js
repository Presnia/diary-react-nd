import './Note.css';
import Emoji from "a11y-react-emoji";

const Note = () => {
  return (
    <div className="note" style={{
      backgroundImage: `url("https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?cs=srgb&dl=pexels-pok-rie-132037.jpg&fm=jpg")`}}>
      <section className="mood-circle_box">
        <span className="mood-circle">
          <span className="mood-emoji">
            <Emoji symbol="🤔" label="thinking"/>
          </span>
        </span>
      </section>
      <div className="description-container">
        <div className="description-wrapper">
          <span className="description-title">The lake of my dream</span>
          <span className="description-date">Mon 1 March</span>
        </div>
        <p className="description-text">Today I felt something new...</p>
      </div>
    </div>
  )
}

export default Note;