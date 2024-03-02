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
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          {post.img && (
            <div className={styles.imgContainer}>
              <Image src={post.img} alt="" fill className={styles.img} />
            </div>
          )}
        </div>
        <span className={styles.date}>18-10-2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
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

        <Link className={styles.link} href={`/blog/${post.slug}`}>
          readmore
        </Link>
      </div>
    </div>
  );
}
