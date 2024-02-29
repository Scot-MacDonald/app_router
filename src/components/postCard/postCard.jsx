import Image from "next/image";
import Link from "next/link";
import styles from "./postcard.module.css";

export default function PostCard({ post }) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="/holder.png"
            alt="Frenz"
            priority={true}
            className={styles.img}
            fill
          />
        </div>
        <span className={styles.date}>18-10-2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.description}>{post.description} </p>
        <Link className={styles.link} href="/blog/post">
          readmore
        </Link>
      </div>
    </div>
  );
}
