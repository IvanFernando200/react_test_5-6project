import HomeForm from "../components/HomePage/HomeForm";
import "./styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home">
      <div className="home__header">
        <img className="header-img" src="/homepokepage.png" alt="" />
      </div>
      <div className="home__details">
        <h2 className="home__title">¡Hi trainer!</h2>
        <div className="home__phrase">to get started, give me your name.</div>
      </div>
      <HomeForm />
    </div>
  );
};

export default HomePage;
