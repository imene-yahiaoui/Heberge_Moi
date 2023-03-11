import { Link } from "react-router-dom";
import logo from "../../assets/images/Héberge Moi.png";
import "../../assets/sass/layout/_header.scss";
import Sing from "./sing";
// import { useState } from "react";
const Header = () => {
  // const [user, setUser] = useState(false);
  // localStorage.getItem("token") ? setUser(!user) : setUser(user);
  // function Singout() {
  //   localStorage.removeItem("token");
  // }

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
        <li>
         <Sing/>
        </li>
      </ul>
    </div>
  ) 
  // : (
  //   <div className="header">
  //     <Link to="/">
  //       <img className="logo" src={logo} alt="logo heberge moi "></img>
  //     </Link>
  //     <ul className="nav">
  //       <li>
  //         <Link to="/">Accueil</Link>
  //       </li>
  //       <li>
  //         <Link to="./About">A Propos</Link>
  //       </li>
  //       <li>
  //       <button onClick={Singout}>logout</button>
  //       </li>
  //     </ul>
  //   </div>
  // );
};

export default Header;
