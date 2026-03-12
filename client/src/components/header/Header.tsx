import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import styles from "./Header.module.css";

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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const isHeaderActive = !isHome || (isHome && scrolled);

  const headerClass = `${styles.header} ${isHeaderActive ? styles.headerClasses : ""}`
  
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
