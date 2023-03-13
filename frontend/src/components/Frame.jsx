import { NavLink } from "react-router-dom";
import "../assets/sass/layout/_frame.scss";

const Frame = (props) => {
  return (
    <NavLink to={`/Housing/${props._id}`} key={props._id}>
      
      <div className="frame">
        <div className="contiener ">
          <img src={props.cover} alt={props.title}></img>
          <p>{props.title}</p>
        </div>
        <div className="middle"> </div>
      </div>
    </NavLink>


  );
};

export default Frame;
