import { Link } from "react-router-dom";
import styles from "./not_found.module.css";

export const NotFound = () => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.errorNumber}>404</h1>
        <h2 className={styles.title}>Oops! This page is missing</h2>
        <p className={styles.message}>
          It seems you've wandered too far into the coffee clouds. 
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className={styles.homeBtn}>
          Back to Safety
        </Link>
      </div>
    </main>
  );
};