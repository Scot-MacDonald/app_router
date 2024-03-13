import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./datecard.module.css";

export default function DateCard({ date }) {
  if (!date || !date.title || !date.year || !date.week || !date.desc) {
    return null; // or handle the absence of required properties gracefully
  }

  return (
    <Link className={styles.link} href={`/date/${date.slug}`}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1>{date.year}</h1>
          <h1 className={styles.title}>{date.title}</h1>
          <div className={styles.week}>Week {date.week}</div>
        </div>

        <div className={styles.bottom}></div>
      </div>
    </Link>
  );
}
