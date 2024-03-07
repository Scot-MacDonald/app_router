import Links from "./links/Links";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        {/* <Image src={"/homeB.png"} width={70} height={70} alt="" /> */}
        <h1 className={styles.title}>International Allende</h1>
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
}
