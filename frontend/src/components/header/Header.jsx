import { Link } from "react-router-dom";
import logo from "../../assets/images/Héberge Moi.png";
import "../../assets/sass/layout/_header.scss";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="logo heberge moi "></img>
      </Link>
      <ul className="nav">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="./About">A Propos</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/Login"> Sign In </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
