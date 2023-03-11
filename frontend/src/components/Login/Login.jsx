import From from "../../containers/form/form";
import "./_style.scss";

const Login = () => {
  return (
    <div className="div">
      <main className="main bg-dark">
        <section className="sign-in-content">
          <h1 className="connexion">connexion</h1>
          <From />
        </section>
      </main>
    </div>
  );
};

export default Login;
