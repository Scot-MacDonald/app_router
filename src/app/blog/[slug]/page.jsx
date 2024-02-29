import Image from "next/image";
import styles from "./singlePost.module.css";

export default function SinglePostPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/holder.png" alt="" fill className={styles.img} />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>title</h1>
        <div className={styles.detail}>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.10.1919</span>
          </div>
        </div>
        <div className={styles.content}>description</div>
      </div>
    </div>
  );
}
