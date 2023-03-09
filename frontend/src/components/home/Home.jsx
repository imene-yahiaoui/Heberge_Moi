import Picture from "./Picture";
import Image from "../../assets/images/bedroom-g72bb9dca7_640.jpg";
import ImageMobile from "../../assets/images/hotel-gf13621c96_640.jpg";
import Frame from "./Frame";
import "../../assets/sass/layout/_container.scss";
import useMediaQuery from "../utile/MediaQuery";

const Home = ({ posts }) => {
  const matches = useMediaQuery("(max-width:767px)");
  return (
    <div>
      {matches ? (
        <Picture
          img={ImageMobile}
          text="Trouvez votre hébergement,"
          paragraphe=" en 1 clic"
        />
      ) : (
        <Picture
          img={Image}
          text="Trouvez votre hébergement,"
          paragraphe=" en 1 clic"
        />
      )}
      <div className="container">
        {posts.map((post) => (
          <Frame
            cover={post.cover}
            title={post.title}
            key={post._id}
            _id={post._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
