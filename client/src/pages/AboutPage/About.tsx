import styles from "./About.module.css";
// import aboutImg from "../../assets/about-coffee.webp"; // Asegúrate de tener una imagen similar

export const About = () => {
  return (
    <main className={styles.aboutContainer}>
      {/* HEADER DE LA PÁGINA */}
      <header className={styles.aboutHeader}>
        <h1 className={styles.mainTitle}>Crafting the Perfect Cup</h1>
        <p className={styles.subtitle}>Beyond the bean, there is a story.</p>
      </header>

      {/* HISTORIA PRINCIPAL */}
      <section className={styles.storySection}>
        <article className={styles.storyText}>
          <h2>Our Philosophy</h2>
          <p>
            At <strong>ROAST</strong>, we believe that coffee is more than just a morning routine; 
            it is an art form. Our journey started with a simple goal: to bring the authentic 
            flavors of high-altitude beans directly to your cup.
          </p>
          <p>
            We focus on <strong>Sustainability</strong> and <strong>Precision</strong>. 
            By working closely with local farmers, we ensure that every bean is harvested 
            at its peak, respecting both the environment and the people behind the harvest.
          </p>
        </article>
        <div className={styles.storyImage}>
           {/* Aquí puedes poner una imagen de granos de café o una prensa francesa */}
        </div>
      </section>

      {/* VALORES - GRID PEQUEÑO */}
      <section className={styles.valuesGrid}>
        <div className={styles.valueCard}>
          <h3>Expert Roasting</h3>
          <p>Small batches to guarantee the freshest aroma and a balanced acidity in every sip.</p>
        </div>
        <div className={styles.valueCard}>
          <h3>Global Sourcing</h3>
          <p>We select the finest beans from Colombia, Ethiopia, and Brazil, searching for unique profiles.</p>
        </div>
        <div className={styles.valueCard}>
          <h3>Cozy Vibes</h3>
          <p>A place designed for those who enjoy slow mornings and deep conversations.</p>
        </div>
      </section>
    </main>
  );
};