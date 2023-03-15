import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carrousel from "./carrousel";
import Info from "./info";
import Tag from "./tag";
import "../../assets/sass/pages/_Housing.scss";
import Stars from "./stars";
import Collapse from "../../components/collapse";
import Host from "./Host";
import NotFound from "../notFound/NotFound";
import { useSelector } from "react-redux";
import { body } from "../../helpers/features/userSlice";


const Housing = () => {
  const info = useSelector(body);
  let posts = info.payload?.user?.body?.response;

  const [index, setCurrentindex] = useState(0);

  const [error, setError] = useState(false);

  console.log(error);

  ////recuperer le ID
  const { id } = useParams();
  console.log(id);

  ///slidesLenghth
  const slidesLenghth = posts
    .filter((post) => post._id === id)
    .map((post) => post.pictures.length);

  /// function presedent
  const goToPrevious = () => {
    const firstSlide = index === 0;

    const newIndex = firstSlide ? slidesLenghth - 1 : index - 1;

    setCurrentindex(newIndex);
  };
  ///function suivant
  const goToNext = () => {
    const lastSlide = index === slidesLenghth - 1;

    const newIndex = lastSlide ? 0 : index + 1;
    setCurrentindex(newIndex);
  };

  ////keyboard
  function keyclavier(e) {
    if (e.keyCode === 37) {
      goToPrevious();
    } else if (e.keyCode === 39) {
      goToNext();
    }
  }
  document.addEventListener("keydown", keyclavier);

  ///tagLenght
  const tagLength = posts
    .filter((post) => post._id === id)
    .map((post) => post.tags.length);

  const tag = [];
  for (let item = 0; item <= tagLength - 1; item++) {
    posts
      .filter((post) => post._id === id)
      .map((post) => tag.push(<Tag tags={post.tags[item]} key={item} />));
  }

  const Rating = posts
    .filter((post) => post._id === id)
    .map((post) => post.rating);
  const stars = Array(5).fill(0);

  const colorStars = {
    grey: "#f6f6f6",
    red: "#ff6060",
  };

  ///////////

  const invalidId = id.match(/^[a-z0-9]{8}$/i) === null;

  useEffect(() => {
    if (!invalidId) {
      console.log("invalide");
      const getCurrentAccommodationData = async () => {
        try {
          let data = {};
          const response = await fetch("http://localhost:3000/api/accommodate");

          if (response.ok) {
            data = await response.json();

            const currentAccommodationData = data.find(
              (accommodation) => accommodation._id === id
            );

            if (currentAccommodationData === undefined) {
              console.log("undefined");
              setError(true);
            }
          }
        } catch (err) {
          setError(true);
        } finally {
        }
      };

      getCurrentAccommodationData();
    }
  });
  ///////////////

  // if (invalidId) {
  //   return <NotFound />;
  // }

  return (
    <section>
      {error ? (
        <NotFound />
      ) : (
        <div>
          <div className="carrousel_imgs">
            {posts
              .filter((post) => post._id === id)
              .map((post) => (
                <Carrousel slides={post.pictures[index]} key={post._id} />
              ))}

            {posts
              .filter((post) => post._id === id)
              .map((post) => (
                <i
                  style={{
                    display: post.pictures.length === 1 ? "none" : "block",
                  }}
                  key={post._id}
                  className="fa-solid fa-angle-left"
                  onClick={goToPrevious}
                ></i>
              ))}
            {posts
              .filter((post) => post._id === id)
              .map((post) => (
                <i
                  style={{
                    display: post.pictures.length === 1 ? "none" : "block",
                  }}
                  key={post._id}
                  className="fa-solid fa-angle-right"
                  onClick={goToNext}
                ></i>
              ))}

            {posts
              .filter((post) => post._id === id)
              .map((post) => (
                <p
                  style={{
                    display: post.pictures.length === 1 ? "none" : "flex",
                  }}
                  key={post._id}
                  className="carousel-notes"
                >
                  {[index + 1]}/{post.pictures.length}
                </p>
              ))}
          </div>
          <div className="containerInfo">
            <div className="containerTagInfo">
              {posts
                .filter((post) => post._id === id)
                .map((post) => (
                  <Info
                    title={post.title}
                    location={post.location}
                    key={post._id}
                  />
                ))}

              <ul className="tags">{tag}</ul>
            </div>

            <div className="containerHostStars">
              <div className="host">
                {posts
                  .filter((post) => post._id === id)
                  .map((post) => (
                    <Host
                      key={post._id}
                      picture={post.host.picture}
                      name={post.host.name}
                    />
                  ))}
              </div>
              <div className="star">
                {stars.map((_, rating) => {
                  return (
                    <Stars
                      key={rating}
                      color={Rating > rating ? colorStars.red : colorStars.grey}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="collapseHosing">
            {posts
              .filter((post) => post._id === id)
              .map((post) => (
                <Collapse
                  title={"description"}
                  text={post.description}
                  key={post._id}
                />
              ))}
            {posts
              .filter((post) => post._id === id)
              .map((post) => (
                <Collapse
                  title={"Équipements"}
                  ArryText={post.equipments.map((equipment) => (
                    <li key={equipment}>{equipment}</li>
                  ))}
                  key={post._id}
                />
              ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Housing;
