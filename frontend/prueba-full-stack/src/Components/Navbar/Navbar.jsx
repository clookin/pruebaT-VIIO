import { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faHouse, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = ()=>{
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };
  return (
    <div className="nav-bar">
    {isLoggedIn && (
        <ul className="nav-menu nav-menu-l">
          <Link className="nav-menu-icon">
          <FontAwesomeIcon icon={faHouse} />
          </Link> 
          <Link className="nav-menu-icon">
          <FontAwesomeIcon icon={faBagShopping} />
          </Link>
          <Link className="nav-menu-icon">
          <FontAwesomeIcon icon={faRightFromBracket} />
          </Link>
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
