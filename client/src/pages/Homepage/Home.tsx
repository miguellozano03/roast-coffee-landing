import { Link } from "react-router-dom";
import { useMenu } from "@hooks/useMenu";
import { Card } from "@components/card/Card";
// import { favorites } from "./favouritesProducts";
import heroImage from "@assets/images/hero_background.webp";
import styles from "./Home.module.css";

const heroTexts = [
  {
    title: "Simple Coffee. Better Days",
    paragraph:
      "Stop by for a perfect cup of coffee. Fresh beans, expert roasting, and a cozy atmosphere.",
  },
];

export const Home = () => {
  const {menu} = useMenu();
  const favorites = menu.slice(0,3);
  return (
    <>
      <section
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
        }}
        className={styles.hero}
      >
        <h2 className={styles.heroTitle}>{heroTexts[0].title}</h2>
        <p className={styles.heroText}>{heroTexts[0].paragraph}</p>

        <Link to="/menu" className={styles.viewBtn}>
          View Menu
        </Link>
      </section>

      <section className={`${styles.sections} ${styles.infoSection}`}>
        <article className={styles.infoArticle}>
          <h2>Simplicity in Every Sip</h2>
          <p>
            We don't do complicated. At ROAST, we focus on three things: the
            origin of the bean, the precision of the temperature, and the smile
            on your face. Our coffee is roasted in small batches to guarantee
            freshness every morning.
          </p>
        </article>
        <div className={styles.infoImage}></div>
      </section>

      <section className={styles.sections}>
        <div className={styles.recipesHeader}>
          <span className={styles.recipesSubtitle}>Selected for you</span>
          <h2 className={styles.recipesTitle}>Our best recipes</h2>
          <div className={styles.divider}></div>
          <p className={styles.recipesDescription}>
            According to our customers
          </p>
        </div>

        <div className={styles.favouritesGrid}>
          {favorites.map((product) => (
            <Card
              imgUrl={product.imgUrl}
              imgAlt={product.title}
              title={product.title}
              content={product.content}
              price={product.price}
            />
          ))}
        </div>
      </section>
    </>
  );
};
