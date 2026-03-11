import { useMenu } from "@hooks/useMenu";
import { Card } from "@components/card/Card";
import styles from "./Menu.module.css";

export const Menu = () => {
  const { menu, loading, error } = useMenu();
  return (
    <main className={styles.mainContainer}>
      <header className={styles.menuHeader}>
        <h1 className={styles.title}>Nuestra Carta</h1>
        <p className={styles.subtitle}>
          Explora nuestras especialidades tostadas artesanalmente.
        </p>
      </header>

      {error ? (
        <p className={`${styles.statusMessage} ${styles.error}`}>
          Error: ${error}
        </p>
      ) : loading ? (
        <p className={styles.statusMessage}>Loading menu...</p>
      ) : (
        <section className={styles.menuGrid}>
          {menu.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              content={item.content}
              price={item.price}
              imgUrl={item.imgUrl}
              imgAlt={item.title}
            />
          ))}
        </section>
      )}
    </main>
  );
};
