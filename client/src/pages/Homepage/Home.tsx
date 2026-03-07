import styles from "./Home.module.css";
import heroImage from "../../assets/background-hero_11zon.webp";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <section
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})` }}
        className={styles.hero}
      >
        <h2 className={styles.heroTitle}>Simple Coffee. Better Days</h2>
        <p className={styles.heroText}>Stop by for a perfect cup of coffee. Fresh beans, expert roasting, and a cozy atmosphere.</p>

        <Link to="/menu" className={styles.viewBtn}>View Menu</Link>
      </section>
    </>
  );
};
