import styles from "./home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Allende Internationl</h1>
        <p className={styles.description}>
          Anfang der 1970er regierte in Chile für 1000 Tage das linke Bündnis
          der Unidad Popular. Gemeinsam mit der Bevölkerung arbeitete es an
          einem ganz eigenen demokratischen Sozialismus. Daran beteiligt waren
          auch Unterstütz*erinnen aus aller Welt. Ihnen gewidmet ist diese
          Website.
        </p>
        <div className={styles.buttons}>
          <div className={styles.button}>Learn more</div>
          <div className={styles.button}>Contact</div>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/holder.png" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
}
