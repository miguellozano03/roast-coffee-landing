import { Card } from "../../components/card/Card";
import styles from "./Menu.module.css";

// DATOS DE PRUEBA (Para que visualices el layout ahora mismo)
// Estos campos coinciden con tu interfaz CardProps
const MOCK_PRODUCTS = [
  {
    id: 1,
    title: "Espresso Tradicional",
    content: "Cuerpo intenso con una capa de crema color avellana. El alma de nuestra casa.",
    price: 3.50,
    imgUrl: "https://images.unsplash.com/photo-1510707577719-af7c183f10ba?q=80&w=500",
  },
  {
    id: 2,
    title: "Caramel Macchiato",
    content: "Leche vaporizada con vainilla, manchada con espresso y terminada con caramelo.",
    price: 4.90,
    imgUrl: "https://images.unsplash.com/photo-1485808191679-5f6333c17c8c?q=80&w=500",
  },
  {
    id: 3,
    title: "Muffin de Arándanos",
    content: "Horneado diariamente con arándanos frescos y un toque de limón.",
    price: 2.75,
    imgUrl: "https://images.unsplash.com/photo-1607958674115-05b24858a945?q=80&w=500",
  },
  {
    id: 4,
    title: "Flat White",
    content: "Micro-espuma de leche sedosa vertida sobre un shot doble de espresso ristretto.",
    price: 4.20,
    imgUrl: "https://images.unsplash.com/photo-1534706936160-d5ee67737249?q=80&w=500",
  }
];

export const Menu = () => {
  return (
    <main className={styles.mainContainer}>
      <header className={styles.menuHeader}>
        <h1 className={styles.title}>Nuestra Carta</h1>
        <p className={styles.subtitle}>
          Explora nuestras especialidades tostadas artesanalmente.
        </p>
      </header>

      <section className={styles.menuGrid}>
        {MOCK_PRODUCTS.map((item) => (
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