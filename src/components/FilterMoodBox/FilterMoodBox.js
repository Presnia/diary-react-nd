import './FilterMoodBox.css';
import filterSmile from "../../assets/img/filter-smile.svg";
import arrow from "../../assets/img/down-arrow.svg";

const FilterMoodBox = () => {
  return (
    <div className="filter-mood_box">
        <span className="filter-mood_smile">
          <img className="filter-smile" src={filterSmile} alt="mood smile"/>
        </span>
      <span className="chevron-down">
          <img className="down-arrow" src={arrow} alt="arrow"/>
        </span>
    </div>
  )
}

export default FilterMoodBox;