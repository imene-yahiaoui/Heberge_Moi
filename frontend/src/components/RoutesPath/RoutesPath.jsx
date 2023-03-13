import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Housing from "../housing/Housing";
import About from "../about/About";
import NotFound from "../notFound/NotFound";
import Add from "../AddAccommodate/Add";
import Login from "../Login/Login";
import { useSelector } from "react-redux";
import { selectUser } from "../../helpers/features/userSlice"
import ProtectrdRoute from "../../helpers/protectrdRoute";
import Protect from "../../helpers/protect";


const RoutesPath = ({ posts, dataAbout }) => {
  const user = useSelector(selectUser);
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home posts={posts} />} />
        <Route path="/Housing/:id" element={<Housing posts={posts} />} />
        <Route path="/About" element={<About dataAbout={dataAbout} />} />
        <Route path="/Add"  element={  <ProtectrdRoute  user={user} > <Add /></ProtectrdRoute>} />
        <Route path="/Login" element={ <Protect  user={user}> <Login /></Protect>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default RoutesPath;
