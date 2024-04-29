import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h2>
        <Link to="/">♾</Link>
      </h2>
      <ul>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/form">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
