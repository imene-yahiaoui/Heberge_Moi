import "./_style.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { body } from "../../helpers/features/userSlice";

const Add = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [location, setLocation] = useState("");
  const [cover, setCover] = useState(null);
  const [price, setPrice] = useState("");
  // const [pictures, setPictures] = useState(null);
  const dispatch = useDispatch();

  //pour recuperer la photo de cover
  const handleFileInputChange = (e) => {
    setCover(e.target.files[0]);
  };
  //pour recuperer les photos
  // const handleFileInputChangepicture = (e) => {
  //   setPictures(e.target.files[0]);
  // };
  const navigate = useNavigate();

  async function log(e) {
    e.preventDefault();

    // Créer un objet FormData
    const formData = new FormData();
  
    console.log(cover);
    // Ajouter le fichier sélectionné à l'objet FormData
    formData.append("cover", cover);
    // Ajouter les autres champs du formulaire à l'objet FormData
    formData.append("title", title);
    formData.append("description", description);
    formData.append("rating", rating);
    formData.append("location", location);
    formData.append("price", price);
    // formData.append("pictures", pictures);
    let token = localStorage.getItem("token");

    let result = await fetch(" http://localhost:3000/api/accommodate", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (result.status === 201) {
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
          console.log(e, "error");
        }
      };
      fetchData();

      navigate("/");
    } else {
      console.log("er");
    }
  }
  return (
    <form>
      <div className="input-wrapper">
        <input
          type="file"
          accept="image/*"
          name="cover"
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
        <label htmlFor="rating">rating</label>
        <input
          id="rating"
          type="numbre"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
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
      {/* <div className="input-wrapper">
        <input
          type="file"
          accept="image/*"
          name="cover"
          onChange={handleFileInputChangepicture}
        />
      </div> */}

      <div className="input-wrapper">
        <label htmlFor="price">price</label>
        <input
          id="price"
          type="numbre"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button type="submit" className="sign-in-button" onClick={log}>
        ajout
      </button>
    </form>
  );
};

export default Add;
