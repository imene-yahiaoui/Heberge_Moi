import "./_style.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [rating, setRating] = useState("");
  // const [location, setLocation] = useState("");

  const navigate = useNavigate();

  async function log(e) {
   let item = { title};
    // console.log(item)
e.preventDefault()
    let result = await fetch(" http://localhost:3000/api/accommodate", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify( item),
    });
    result = await result.json();
    if (result.status === 200) {
      navigate("/");
    }
    else{
      console.log(item)
      console.log("er")
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
      
      {/* <div className="input-wrapper">
        <label htmlFor="description">Description</label>
        <input
          id="Description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="Rating">Rating</label>
        <input
          id="Rating"
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
      </div>  */}
      <button type="submit" className="sign-in-button" onClick={log}>
        ajout
      </button>
    </form>
  );
};

export default Add;
