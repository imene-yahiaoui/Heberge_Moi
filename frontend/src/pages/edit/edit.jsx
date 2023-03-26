import "../AddAccommodate/_style.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { body } from "../../helpers/features/userSlice";
import { Rating } from "react-simple-star-rating";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Edit = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const info = useSelector(body);
  let posts = info.payload?.user?.body?.response;
  const porjectID = id;
  //recupere les datas
  const hostNameValue = posts
    .filter((post) => post._id === porjectID)
    .map((post) => post.host.name);
  const coverValue = posts
    .filter((post) => post._id === porjectID)
    .map((post) => post.cover);
  console.log("cover", coverValue);
  const priceValue = posts
    .filter((post) => post._id === porjectID)
    .map((post) => post.price);

  const locationValue = posts
    .filter((post) => post._id === porjectID)
    .map((post) => post.location);
  const ratingValue = posts
    .filter((post) => post._id === porjectID)
    .map((post) => post.rating);
  const numbrePhoneValue = posts
    .filter((post) => post._id === porjectID)
    .map((post) => post.host.numbrePhone);
  const titleValue = posts
    .filter((post) => post._id === porjectID)
    .map((post) => post.title);
  const descriptionValue = posts
    .filter((post) => post._id === porjectID)
    .map((post) => post.description);
  const emailValue = posts
    .filter((post) => post._id === porjectID)
    .map((post) => post.host.email);
  const [style, setStyle] = useState(false);
  const [title, setTitle] = useState(titleValue);
  const [description, setDescription] = useState(descriptionValue);
  const [numbrePhone, setNumbrePhone] = useState(numbrePhoneValue);
  const [email, setEmail] = useState(emailValue);
  const [location, setLocation] = useState(locationValue);
  const [cover, setCover] = useState(coverValue);
  const [price, setPrice] = useState(priceValue);
  const [rating, setRating] = useState(ratingValue);
  const [hostName, setHostName] = useState(hostNameValue);

  //pour recuperer la photo de cover
  const handleFileInputChange = (e) => {
    setCover(e.target.files[0]);
  };

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const navigate = useNavigate();

  async function editAccommodate(e) {
    e.preventDefault();

    // Créer un objet FormData
    const formData = new FormData();

    // Ajouter les autres champs du formulaire à l'objet FormData
    formData.append("cover", cover);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("rating", rating);
    formData.append("location", location);
    formData.append("price", price);
    formData.append("host.numbrePhone", numbrePhone);
    formData.append("host.email", email);
    formData.append("host.name", hostName);

    if (
      cover === null ||
      title === null ||
      description === null ||
      location === null ||
      price === null ||
      numbrePhone === null ||
      email === null ||
      hostName === null
    ) {
      setStyle(true);
      console.log(style);
      function msgdelet() {
        setStyle(false);
      }
      setTimeout(msgdelet, 30000);
    }

    let token = localStorage.getItem("token");

    let result = await fetch(
      " http://localhost:3000/api/accommodate/" + porjectID,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    );

    if (result.status === 200) {
      const fetchData = async () => {
        try {
          const requete = await fetch(
            " http://localhost:3000/api/accommodate",
            {
              method: "GET",
            }
          );
          if (requete.ok) {
            const response = await requete.json();

            dispatch(
              body({
                response,
              })
            );
            console.log(response);
          }
        } catch (e) {
          console.log(e, "error" );
        }
      };
      fetchData();

      navigate("/");
    } else {
      
      console.log("er");
    }
  }
  return (
    <form method="post" encType="multipart/form-data">
      <div className="input-wrapper">
        <label htmlFor="cover">choisi photo pour le cover</label>
        <input
          type="file"
          accept="image/*"
          name="cover"
          // value={coverValue}

          onChange={handleFileInputChange}
        />
      </div>

      <div className="input-wrapper">
        <label htmlFor="title">title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="input-wrapper">
        <label htmlFor="title">description</label>
        <input
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="input-wrapper">
        <label htmlFor="Rating">choisi le Rating</label>
        <Rating onClick={handleRating} initialValue={rating} />
      </div>
      <div className="input-wrapper">
        <label htmlFor="location">location</label>
        <input
          id="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="input-wrapper">
        <label htmlFor="price">price</label>
        <input
          id="price"
          type="numbre"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className="input-wrapper">
        <label htmlFor="Host Name">Host Name</label>
        <input
          id="Host Name"
          type="text"
          value={hostName}
          onChange={(e) => setHostName(e.target.value)}
        />
      </div>

      <div className="input-wrapper">
        <label htmlFor="numbrePhone">
          entrez le numero de telephone de le host{" "}
        </label>
        <input
          type="numbre"
          name="numbrePhone"
          id="numbrePhone"
          value={numbrePhone}
          onChange={(e) => setNumbrePhone(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="Host Name">Host email</label>
        <input
          id="Host Name"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="sign-in-button"
        onClick={editAccommodate}
      >
        modifier
      </button>
      <p className={!style ? "input-errDis" : "input-errActive"}>
        {" "}
        tous les champs doivent être remplis
      </p>
    </form>
  );
};

export default Edit;
