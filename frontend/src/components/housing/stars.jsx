import "../../assets/sass/layout/_stars.scss";

const Stars = (props) => {
  return (
    <div>
      <div className="stars">
        <i
          style={{ color: props.color }}
          className="fa-sharp fa-solid fa-star"
        ></i>
      </div>
    </div>
  );
};

export default Stars;
