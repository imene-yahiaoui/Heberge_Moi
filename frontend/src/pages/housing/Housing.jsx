import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carrousel from "./carrousel";
import Info from "./info";

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

  // const [index, setCurrentindex] = useState(0);

  const [error, setError] = useState(false);

  console.log(error);

  ////recuperer le ID
  const { id } = useParams();
  console.log(id);

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
                <Carrousel slides={post.cover} alt={post.title} key={post._id}>
                  {" "}
                </Carrousel>
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

              {/* <ul className="tags">{tag}</ul> */}
            </div>

            <div className="containerHostStars">
              <div className="host">
                {posts
                  .filter((post) => post._id === id)
                  .map((post) => (
                    <Host key={post._id} name={post.host.name} />
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
