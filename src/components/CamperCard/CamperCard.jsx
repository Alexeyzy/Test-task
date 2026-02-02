import styles from "./CamperCard.module.css";

export default function CamperCard() {
  return (
    <div className={styles.card}>
      <img src="https://via.placeholder.com/300x200" alt="camper" />
      <div className={styles.info}>
        <h3>Volkswagen Grand California</h3>
        <p className={styles.price}>€8,000.00</p>
        <p>Kyiv, Ukraine</p>
        <button>Show more</button>
      </div>
    </div>
  );
}