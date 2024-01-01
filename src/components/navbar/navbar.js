import Link from "next/link";
import { Lobster_Two } from "next/font/google";
import styles from "./navbar.module.css";

const lobster = Lobster_Two({ subsets: ['latin'], weight: "700" });

export default function Navbar() {
  return (
    <header className={styles.heading}>
      <div className={`${lobster.className} ${styles.logo}`}>Snappy</div>
      <nav className={styles.navigation}>
        <Link href="/">Homepage</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/posts">Posts</Link>
      </nav>
    </header>
  )
}
