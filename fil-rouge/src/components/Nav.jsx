import { NavLink } from "react-router-dom";

const Nav = (props) => {


  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink  to="/products">
            Produits
          </NavLink>
        </li>
        <li>
          <NavLink  to="/Localisation">
            Localisation
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;