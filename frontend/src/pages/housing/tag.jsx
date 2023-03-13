import "../../assets/sass/layout/_tags.scss";
import "../../assets/sass/layout/_info.scss";

const Tag = (props) => {
  return (
    <li className="tag-container">
      <p className="tag">{props.tags}</p>
    </li>
  );
};

export default Tag;
