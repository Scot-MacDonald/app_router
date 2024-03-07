import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./arbeitcard.module.css";

export default function ArbeitCard({ arbeit }) {
  // Check if post exists and has a desc property

  if (!arbeit || !arbeit.img) {
    // Handle the absence of arbeit.img gracefully
    return (
      <div className={styles.container}>
        <p>No image available</p>
      </div>
    );
  }

  return (
    <Link className={styles.link} href={`/arbeit/${arbeit.slug}`}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className={styles.circle}
          >
            <circle cx="50" cy="50" r="50" fill="white" stroke="white" />
          </svg>
          <h1 className={styles.title}>{arbeit.title}</h1>
        </div>
        <div className={styles.top}>
          <span className={styles.date}>18-10-2024</span>
          <div className={styles.imgContainer}>
            {arbeit.img && (
              <div className={styles.imgWrapper}>
                <div className={styles.imgContainer}>
                  <Image src={arbeit.img} alt="" fill className={styles.img} />
                </div>
                <div className={styles.overlay}></div>
              </div>
            )}
          </div>
          <span className={styles.date}>18-10-2024</span>
        </div>
        <div className={styles.bottom}>
          {/* <p className={styles.description}>{post.desc}</p> */}
          readmore
        </div>
      </div>
    </Link>
  );
}
