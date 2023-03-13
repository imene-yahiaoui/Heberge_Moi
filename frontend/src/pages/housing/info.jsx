import "../../assets/sass/layout/_info.scss";

const Info = (props) => {
  return (
    <div className="info">
      <h2 className="info_titre">{props.title}</h2>
      <p className="info_titre_localitation">{props.location}</p>
    </div>
  );
};

export default Info;
