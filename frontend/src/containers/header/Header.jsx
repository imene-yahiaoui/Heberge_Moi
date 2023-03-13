import { Link } from "react-router-dom";
import logo from "../../assets/images/Héberge Moi.png";
import "../../assets/sass/layout/_header.scss";
import Sing from "./sing";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="logo heberge moi "></img>
      </Link>
      <div className="btn">
        <ul className="nav">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="./About">A Propos</Link>
          </li>
        </ul>
        <Sing />
      </div>
    </div>
  );
};

export default Header;
