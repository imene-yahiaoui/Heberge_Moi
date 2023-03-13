import "./_style.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageUploading from 'react-images-uploading';


const Add = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [location, setLocation] = useState("");
  const [cover, setCover] = useState(null);
  const [fileName, setFileName] = useState("no selected");
  const [photos, setPhotos] = useState([]);
  const [fileNamePhotos, setFileNamePhotos] = useState("no selected");
  

  const navigate = useNavigate();

  async function log(e) {
    let item = { title, description, rating, location, cover ,photos};
    let token = localStorage.getItem("token");

    e.preventDefault();
    let result = await fetch(" http://localhost:3000/api/accommodate", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(item),
    });

    if (result.status === 201) {
      navigate("/");
    } else {
      console.log(item);
      console.log("er");
    }
  }
  return (
    <form>
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
      <input
        type="file"
        accept="image/*"
        onChange={({ target: { files } }) => {
          files[0] && setFileNamePhotos(files[0].name);
          if (files) {
            setPhotos(URL.createObjectURL(files[0]));
          }
        }}
      ></input>
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
      <input
        type="file"
        accept="image/*"
        onChange={({ target: { files } }) => {
          files[0] && setFileName(files[0].name);
          if (files) {
            setCover(URL.createObjectURL(files[0]));
          }
        }}
      ></input>

      <button type="submit" className="sign-in-button" onClick={log}>
        ajout
      </button>
    </form>
  );
};

export default Add;
