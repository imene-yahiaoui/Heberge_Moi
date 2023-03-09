import "../../assets/sass/layout/_footer.scss";
import Logofooter from "../../assets/images/footer.png";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Logofooter} alt=" logo heberge moi "></img>
      <p>© 2023 Héberge Moi . Tous les droits sont réservés</p>
    </div>
  );
};

export default Footer;
