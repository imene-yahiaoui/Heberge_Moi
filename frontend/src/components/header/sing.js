
import "../../assets/sass/layout/_header.scss";
import { useDispatch, useSelector } from "react-redux";
import {  logout, selectUser } from "../../helpers/features/userSlice";
import { useNavigate} from "react-router-dom";

const Sing = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function Singout() {
      console.log("jai bien ecouter")
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
    <div className="nav">
         
      <button onClick={Singin} className="main-nav-item">
      
        login
      </button>
    </div>
  ) : (
    <div className="nav">
    
      <button onClick={Singout} className="main-nav-item">
       
      logout
      </button>
    </div>
  );
};

export default Sing;