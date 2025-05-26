import styles from './CallToAction.module.css';

export default function CallToAction() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.text}>
          <p className={styles.label}>Designing Better Experience</p>
          <h2 className={styles.heading}>Problems trying to resolve the conflict between</h2>
          <p className={styles.description}>
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
          <p className={styles.price}>$16.48</p>
          <button className={styles.button}>Add to Cart</button>
        </div>
        <div className={styles.image}>
          <img src="https://via.placeholder.com/400x400" alt="Product" />
        </div>
      </div>
    </section>
  );
}
