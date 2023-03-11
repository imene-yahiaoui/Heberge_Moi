import "../../assets/sass/layout/_sing.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../helpers/features/userSlice";
import { useNavigate } from "react-router-dom";

const Sing = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function add() {
    navigate("/Add");
  }

  function Singout() {
    localStorage.removeItem("token");
    navigate("/");
    dispatch(logout());
  }
  function Singin() {
    navigate("/login");
  }
  if (!user) {
    localStorage.removeItem("token");
  }
  return !user ? (
    <div>
      <button onClick={Singin} className="btn-sing">
        connexion
      </button>
    </div>
  ) : (
    <div className="modeAdmine">
      <button onClick={add} className="btn-add">
        Ajouter
      </button>
      <button onClick={Singout} className="btn-sing">
        Se déconnecter
      </button>
    </div>
  );
};

export default Sing;
