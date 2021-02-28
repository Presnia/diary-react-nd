import './AddNotePage.css';
import searchBtn from '../../assets/img/search-found.svg';
import FilterMoodBox from "../FilterMoodBox/FilterMoodBox";

const AddNoteField = () => {
  return (
    <div className="add-note_field">

      <section className="header-note_field">
        <input className="input input-name" placeholder="Название"/>
        <div className="search-block">
          <input className="input input-search" placeholder="Поиск"/>
          <button className="search-btn">
            <img className="search-btn_img" src={searchBtn} alt="search button"/>
          </button>
        </div>
      </section>

      <div className="notes-field">
        <section className="left-field_info">
          <section className="emoji-date">
            <FilterMoodBox />
            <input className="input-date_info" placeholder="Дата"/>
          </section>

          <div className="description-text_field">
            <textarea className="description-text" placeholder="Описание" />
          </div>
        </section>

        <div className="gallery">
          <section className="right-field_info gallery-left">
            <img className="img-1" src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?cs=srgb&dl=pexels-pok-rie-132037.jpg&fm=jpg" alt="note" />
            <img className="img-2" src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg" alt="note" />
          </section>

          <section className="right-field_info gallery-right">
            <img className="img-3" src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=pexels-pixabay-36717.jpg&fm=jpg" alt="note" />
            <img className="img-4" src="https://images.pexels.com/photos/230629/pexels-photo-230629.jpeg?cs=srgb&dl=pexels-dianne-230629.jpg&fm=jpg" alt="note" />
            <img className="img-5" src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?cs=srgb&dl=pexels-marius-venter-1659438.jpg&fm=jpg" alt="note" />
          </section>
        </div>
      </div>
    </div>
  )
}

export default AddNoteField;