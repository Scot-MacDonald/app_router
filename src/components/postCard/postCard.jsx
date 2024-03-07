import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./postcard.module.css";

export default function PostCard({ post }) {
  // Check if post exists and has a desc property
  if (!post || !post.desc) {
    return null; // or handle the absence of post.desc gracefully
  }

  return (
    <Link className={styles.link} href={`/blog/${post.slug}`}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className={styles.hexagon}
          >
            <polygon
              points="50 1.95 97.5 25 97.5 75 50 98.05 2.5 75 2.5 25 50 1.95"
              fill="white"
              stroke="white"
            />
          </svg>
          <h1 className={styles.title}>{post.title}</h1>
        </div>
        <div className={styles.top}>
          <div className={styles.imgContainer}>
            {post.img && (
              <div className={styles.imgWrapper}>
                <div className={styles.imgContainer}>
                  <Image src={post.img} alt="" fill className={styles.img} />
                </div>
                <div className={styles.overlay}></div>
              </div>
            )}
          </div>
          <span className={styles.date}>18-10-2024</span>
        </div>
        <div className={styles.bottom}>
          <p className={styles.description}>{post.desc}</p>
          {/* {post.main && (
          <div className={styles.mainContent}>
            {post.main.map((item, index) => (
              <p key={index} className={styles.mainItem}>
                {item}
              </p>
            ))}
          </div>
        )} */}
        </div>
      </div>
    </Link>
  );
}
