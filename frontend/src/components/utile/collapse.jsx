import "../../assets/sass/layout/_collapase.scss";
import { useState } from "react";

const Collapse = (props) => {
  const [open, setOpen] = useState("none");

  return (
    <div className="collapse">
      <div className="collapse-title">
        <h6>{props.title}</h6>
        <div>
          <i
            style={{ display: open }}
            className="fa-solid fa-angle-up"
            onClick={() => setOpen(open === "none" ? "block" : "none")}
          ></i>

          <i
            style={{ display: open === "none" ? "block" : "none" }}
            className="fa-solid fa-angle-down"
            onClick={() => setOpen(open === "none" ? "block" : "none")}
          ></i>
        </div>
      </div>
      <div className="collapse-article" style={{ display: open }}>
        <p>{props.text}</p>
        <ul className="ArryText">{props.ArryText} </ul>
      </div>
    </div>
  );
};

export default Collapse;
