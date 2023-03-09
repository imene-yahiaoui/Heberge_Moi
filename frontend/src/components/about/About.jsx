import Mountains from "../../assets/images/bed-gacff64e97_640.jpg";
import Picture from "../home/Picture";
import Collapses from "./collapses";
import Imagphon from "../../assets/images/coffee-g13332abb2_640.jpg";
import useMediaQuery from "../utile/MediaQuery";
import "../../assets/sass/pages/_about.scss";

const About = ({ dataAbout }) => {
  const matches = useMediaQuery("(max-width:767px)");
  return (
    <div className="aboutCollapses">
      {matches ? <Picture img={Imagphon} /> : <Picture img={Mountains} />}
      <Collapses dataAbout={dataAbout} />
    </div>
  );
};

export default About;
