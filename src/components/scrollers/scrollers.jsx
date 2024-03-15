"use client";

import styles from "./scrollers.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Scrollers({ date }) {
  const [isHovered, setIsHovered] = useState(false);

  if (!date || !date.title || !date.year || !date.week || !date.desc) {
    return null;
  }

  return (
    <>
      <Link href={`/date/${date.slug}`}>
        <div
          className={styles.container}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={styles.titleContainer}>
            <h1>{date.year}</h1>
            <h1 className={styles.title}>{date.title}</h1>
            <div className={styles.week}>Week {date.week}</div>
          </div>
        </div>
      </Link>
      <div
        className={`${styles.answer} ${isHovered ? styles.showDesc : ""}`}
      ></div>
    </>
  );
}
