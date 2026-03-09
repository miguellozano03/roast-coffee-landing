import styles from "./Locations.module.css";

const STORE_LOCATIONS = [
  {
    id: 1,
    name: "ROAST - Flagship Headquarters",
    address: "742 Evergreen Terrace, Coffee District",
    hours: "Mon - Sat: 7:00 AM - 9:00 PM",
    description: "Our main laboratory where the magic happens. Experience our exclusive cupping sessions and watch our master roasters in action.",
    type: "main"
  },
  {
    id: 2,
    name: "ROAST - Downtown Express",
    address: "123 Business Ave, Financial Center",
    hours: "Mon - Fri: 6:00 AM - 6:00 PM",
    description: "The perfect spot for your morning commute. Fast service without compromising our signature quality.",
    type: "branch"
  },
  {
    id: 3,
    name: "ROAST - The Garden Lab",
    address: "456 Greenway Blvd, Botanical Park",
    hours: "Daily: 8:00 AM - 8:00 PM",
    description: "An open-air experience surrounded by nature. Ideal for slow weekends and brewing workshops.",
    type: "branch"
  }
];

export const Locations = () => {
  const mainStore = STORE_LOCATIONS.find(s => s.type === 'main');
  const branches = STORE_LOCATIONS.filter(s => s.type === 'branch');

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Find Us</h1>
        <p className={styles.subtitle}>Our doors are always open for coffee lovers.</p>
      </header>

      {/* SEDE PRINCIPAL (Destacada) */}
      {mainStore && (
        <section className={styles.mainStore}>
          <div className={styles.mainInfo}>
            <span className={styles.tag}>Main Headquarters</span>
            <h2>{mainStore.name}</h2>
            <p className={styles.address}>📍 {mainStore.address}</p>
            <p className={styles.hours}>🕒 {mainStore.hours}</p>
            <p className={styles.desc}>{mainStore.description}</p>
            <button className={styles.mapBtn}>Get Directions</button>
          </div>
          <div className={styles.mainImage}></div>
        </section>
      )}

      {/* OTRAS SEDES */}
      <section className={styles.branchesGrid}>
        {branches.map(branch => (
          <div key={branch.id} className={styles.branchCard}>
            <h3>{branch.name}</h3>
            <p className={styles.address}>📍 {branch.address}</p>
            <p className={styles.hours}>🕒 {branch.hours}</p>
            <p className={styles.desc}>{branch.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
};