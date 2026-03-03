import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <nav className={styles.nav}>
        <button onClick={toggleMenu}>{isOpen ? <HiOutlineX /> : <HiOutlineMenu />}</button>
        <ul className={`${styles.navbarList} ${isOpen ? styles.active : ""}`}>
          <li>
            <Link to="/" className={styles.navLink} onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" className={styles.navLink} onClick={() => setIsOpen(false)}>
              Menu
            </Link>
          </li>
          <li>
            <Link to="/locations" className={styles.navLink} onClick={() => setIsOpen(false)}>
              Locations
            </Link>
          </li>
          <li>
            <Link to="/about" className={styles.navLink} onClick={() => setIsOpen(false)}>
              About us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div>
          <h1>Coffe Shop</h1>
        </div>

        <NavBar />
      </header>
    </>
  );
};

export default Header;
