import "./_style.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Add = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [location, setLocation] = useState("");
  const [cover, setCover] = useState(null);
  // const [pictures, setPictures] = useState(null);
 
  const handleFileInputChange = (e) => {
    setCover(e.target.files[0]);
  };

  // const handleFileInputChangepicture=(e)=>{
  //   setPictures(e.target.files[0]);
  // }
  const navigate = useNavigate();


  async function log(e) {
    e.preventDefault();
  
    // Créer un objet FormData
    const formData = new FormData();
  
    // Ajouter le fichier sélectionné à l'objet FormData
    formData.append('cover', cover);
    // formData.append('pictures', pictures);
    // Ajouter les autres champs du formulaire à l'objet FormData
    formData.append('title', title);
    formData.append('description', description);
    formData.append('rating', rating);
    formData.append('location', location);
  
    let token = localStorage.getItem("token");
  
    let result = await fetch(" http://localhost:3000/api/accommodate", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
  
    if (result.status === 201) {
      navigate("/");
    } else {
      console.log("er");
    }
  }
  return (
    <form>
      


<input type="file" accept='image/*' name="cover" onChange={handleFileInputChange} />
      
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
      {/* <input type="file" accept='image/*' name="pictures" onChange={handleFileInputChangepicture} /> */}


      <button type="submit" className="sign-in-button" onClick={log}>
        ajout
      </button>
    </form>
  );
};

export default Add;
