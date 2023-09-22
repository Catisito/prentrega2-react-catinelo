import React from "react";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div>
      <nav>
        <h2>
          <Link className="nav-title" to="/">Rotiseria Aramburu</Link>
        </h2>

        <ul>
          <li>
            <NavLink className="nav-li"  to="/category/burgers">Hamburguesas</NavLink>
          </li>
          <li>
            <NavLink className="nav-li"  to="/category/hotdogs">Panchos</NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget></CartWidget>
    </div>
  );
};

export default NavBar;





