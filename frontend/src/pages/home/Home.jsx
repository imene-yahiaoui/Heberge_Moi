import Picture from "./Picture";
import Image from "../../assets/images/bedroom-g72bb9dca7_640.jpg";
import ImageMobile from "../../assets/images/hotel-gf13621c96_640.jpg";
import Frame from "../../components/Frame";
import "../../assets/sass/layout/_container.scss";
import useMediaQuery from "../../helpers/utile/MediaQuery";
import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { body } from "../../helpers/features/userSlice";
const Home = () => {
  const [posts, setPosts] = useState([]);
  // const info = useSelector(body);
  // let posts = info.payload?.user?.body?.response;
  // console.log(posts);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requete = await fetch(" http://localhost:3000/api/accommodate", {
          method: "GET",
        });
        if (requete.ok) {
          const response = await requete.json();
          setPosts(response);
    
        }
      } catch (e) {
        console.log(e, "error");
      }
    };
    fetchData();
  }, []);

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
