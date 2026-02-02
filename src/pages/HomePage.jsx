import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Campers of your dreams</h1>
        <p className={styles.text}>
          You can find everything you want in our catalog
        </p>

        <Link to="/catalog" className={styles.button}>
          View Now
        </Link>
      </div>
    </section>
  );
}