import notFound from "../../assets/images/404.png";
import { Link } from "react-router-dom";
import "../../assets/sass/pages/_noutFound.scss";

const NotFound = () => { 
  return (
    <div className="notFound">
      <img className="notFound-img" src={notFound} alt="logo 404"></img>

      <p className="notFound-p">
        Oups! La page que <span>vous demandez n'existe pas.</span>
      </p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
};

export default NotFound;
