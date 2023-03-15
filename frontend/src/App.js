import Header from "./containers/header/Header";
import Footer from "./containers/footer/Footer";
import RoutesPath from "./containers/RoutesPath/RoutesPath.jsx";
import { useState, useEffect } from "react";
import "./assets/sass/pages/_App.scss";
import { useDispatch } from "react-redux";
import { body } from "./helpers/features/userSlice.jsx";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [dataAbout, setDataAbout] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const requete = await fetch(" http://localhost:3000/api/accommodate", {
          method: "GET",
        });
        if (requete.ok) {
          const response = await requete.json();

          setPosts(response);
          dispatch(
            body({
              response,
            })
          );
          console.log(response);
        }
      } catch (e) {
        console.log(e, "error");
      }
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const fetchinfo = async () => {
      try {
        const requete = await fetch("../../About.json", {
          method: "GET",
        });
        if (requete.ok) {
          const data = await requete.json();
          setDataAbout(data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchinfo();
  }, []);

  return (
    <div>
      <div className="App">
        <Header />
        <RoutesPath posts={posts} dataAbout={dataAbout} />
      </div>
      <Footer />
    </div>
  );
};
export default App;
