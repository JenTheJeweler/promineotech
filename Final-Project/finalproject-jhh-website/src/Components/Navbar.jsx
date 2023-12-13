//navagation bar to use on each page
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/resume">Resume</NavLink>
        </li>
        <li>
          <NavLink to="/shop-user-listings">Shop Now</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
