import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Allende</div>
      <div className={styles.text}>Allende c all rights reserved</div>
    </div>
  );
}
