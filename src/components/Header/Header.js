import './Header.css';
import logo from '../../assets/img/logo-img.png';
import displayGrid from '../../assets/img/display-grid.svg';
import pen from '../../assets/img/pen.svg'
import FilterBox from "../FilterBox/FilterBox";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-box">
        <img className="logo-img" src={logo} alt="logo"/>
        <h1 className="logo-name">Дневник</h1>
      </div>
      <FilterBox />
      <div className="header-buttons">
        <button className="feed-button">
          <img className="feed-btn_img" src={displayGrid} alt="Список"/>
          <span className="feed-btn_text">Список</span>
        </button>
        <button className="add-button">
          <img className="add-btn_img" src={pen} alt="Запись"/>
          <span className="add-btn_text">Запись</span>
        </button>
      </div>
    </header>
  )
}

export default Header;