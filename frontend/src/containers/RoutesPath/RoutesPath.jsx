import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import Housing from "../../pages/housing/Housing";
import About from "../../pages/about/About";
import NotFound from "../../pages/notFound/NotFound";
import Add from "../../pages/AddAccommodate/Add";
import Login from "../../pages/Login/Login";
import { useSelector } from "react-redux";
import { selectUser } from "../../helpers/features/userSlice";
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
        <Route
          path="/Add"
          element={
            <ProtectrdRoute user={user}>
              {" "}
              <Add />
            </ProtectrdRoute>
          }
        />
        <Route
          path="/Login"
          element={
            <Protect user={user}>
              {" "}
              <Login />
            </Protect>
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default RoutesPath;
