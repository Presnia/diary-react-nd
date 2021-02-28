import './FilterBox.css';
import FilterMoodBox from "../FilterMoodBox/FilterMoodBox";

const FilterBox = () => {
  return (
    <div className="filter">
      <input className="filter-input" type="text" placeholder="Поиск"/>
      <FilterMoodBox />
    </div>
  )
}

export default FilterBox;