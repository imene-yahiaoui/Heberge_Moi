import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import RoutesPath from "./components/RoutesPath/RoutesPath";
import { useState, useEffect } from "react";
import "./assets/sass/pages/_App.scss";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [dataAbout, setDataAbout] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const requete = await fetch(" http://localhost:3000/api/accommodate", {
          method: "GET",
        });
        if (requete.ok) {
          const response = await requete.json();

          setPosts(response);
          console.log(response);
        }
      } catch (e) {
        console.log(e, "error");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
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
    fetchData();
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
