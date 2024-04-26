import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = ()=>{
    setIsLoggedIn(false);
  };
  return (
    <div className="navbar ">
    {isLoggedIn && (
        <ul className="nav-menu nav-menu-l">
          <li className="nav-menu-li">
            <Link className="link" to="/home">
              Inicio
            </Link>
          </li>
          <li className="nav-menu-li">
            <Link className="link" to="/products">
              Productos
            </Link>
          </li>
            <li className="nav-menu-li">
              <Link className="link" to="/" onClick={handleLogout}>
                Log out
              </Link>
            </li>
        </ul>
          )}
      </div>
  );
};

export default Navbar;
