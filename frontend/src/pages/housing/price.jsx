import "../../assets/sass/layout/_tags.scss";
import "../../assets/sass/layout/_info.scss";

const Price = (props) => {
  return (
    <div className="tag-container">
      <p className="tag"> le prix : {props.price} €/jour.</p>
    </div>
  );
};

export default Price;
