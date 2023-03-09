import Collapse from "../utile/collapse";

const Collapses = ({ dataAbout }) => {
  return (
    <div className="collapse_continer">
      {dataAbout.map((boucle) => (
        <Collapse title={boucle.title} text={boucle.text} key={boucle.key} />
      ))}
    </div>
  );
};

export default Collapses;
