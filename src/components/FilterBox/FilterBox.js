import './FilterBox.css';
import arrow from '../../assets/img/down-arrow.svg'
import filterSmile from '../../assets/img/filter-smile.svg'

const FilterBox = () => {
  return (
    <div className="filter">
      <input className="filter-input" type="text" placeholder="Поиск"/>
      <div className="filter-mood_box">
        <span className="filter-mood_smile">
          <img className="filter-smile" src={filterSmile} alt="mood smile"/>
        </span>
        <span className="chevron-down">
          <img className="down-arrow" src={arrow} alt="arrow"/>
        </span>
      </div>
    </div>
  )
}

export default FilterBox;