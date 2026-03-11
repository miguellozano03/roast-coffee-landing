import { useState, useEffect } from "react";
import { Card } from "@components/card/Card";
import styles from "./Menu.module.css";

export const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    fetch("/menu/menu.json") // <- aquí va la ruta de tu JSON
      .then(res => res.json())
      .then(data => {
        setMenu(data);
        setLoading(false);
      })
      .catch(err => console.error("Error fetching menu:", err));
  }, []);

  if (loading) return <p>Loading menu...</p>;
  return (
    <main className={styles.mainContainer}>
      <header className={styles.menuHeader}>
        <h1 className={styles.title}>Nuestra Carta</h1>
        <p className={styles.subtitle}>
          Explora nuestras especialidades tostadas artesanalmente.
        </p>
      </header>

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
    </main>
  );
};