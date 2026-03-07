import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";

import { useLocation } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <nav>
        <button onClick={toggleMenu} className={`${styles.menuIcon} ${isOpen ? styles.btnActive : ""}`}>
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>

        <div className={`${styles.navigationMenuList} ${isOpen ? styles.active : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/menu" onClick={toggleMenu}>Menu</Link>
            </li>
            <li>
              <Link to="/locations" onClick={toggleMenu}>Locations</Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const headerClass = `${styles.header} ${!isHome ? styles.headerClasses: ""}`
  
  return (
    <>
      <header className={headerClass}>
        <div>
          <Link to="/" className={styles.logoText}>Roast</Link>
        </div>

        <NavBar />
      </header>
    </>
  );
};

export default Header;
