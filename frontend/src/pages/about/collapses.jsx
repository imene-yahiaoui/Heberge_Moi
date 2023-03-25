import Collapse from "../../components/collapse";

const Collapses = ({ dataAbout }) => {
  return (
    <div className="collapse_continer">
      {dataAbout.map((boucle) => (
        <Collapse title={boucle.title} text={boucle.text} key={boucle._id} />
      ))}
    </div>
  );
};

export default Collapses;
