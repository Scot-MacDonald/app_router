import Image from "next/image";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Allende</h2>
        <h1 className={styles.title}>
          1.000 Tage demokratischer Sozialismus in Chile.{" "}
        </h1>
        <p className={styles.desc}>
          Am gesellschaftlichen Aufbruch mit dem Regierungsbündnis Salvador
          Allendes (1970-1973) waren auch tausende Enthusiasten aus der ganzen
          Welt beteiligt. Wer waren diese Menschen? Was hat sie angetrieben und
          welche Lehren können wir für heute daraus ziehen? Diesen Fragen geht
          seit 2017 das crossmediale Rechercheprojekt „Allendes Internationale“
          nach, eine Kooperation des Nachrichtenpools Lateinamerika e.V. und der
          Rosa-Luxemburg-Stiftung. Unser Team forscht in Archiven und
          dokumentiert zusammen mit Zeitzeug*innen die subjektiven Erfahrungen
          mit dem demokratischen Sozialismus. Ihre und weitere Biographien und
          Hintergrundberichte werden seit dem 6. September nach und nach auf
          dieser Website zur Verfügung stehen: Audios, Videos, Fotos und
          Kurznachrichten auf einem Zeitstrahl. Außerdem lädt Allendes
          Internationale zum Mitmachen ein. Inhalte können ergänzt und
          kommentiert werden. Internationalen Zeitzeug*innen erhalten mit der
          memoria-máquina die Möglichkeit, Erinnerungen an die Zeit in Chile
          auch von Zuhause als Video-Clips über den Computer oder das Smartphone
          zu senden. Um immer über die neuesten Inhalte und Veranstaltungen
          informiert zu bleiben, empfehlen wir das Abo unseres Newsletters.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/holder.png"
          alt="About Image"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
}
