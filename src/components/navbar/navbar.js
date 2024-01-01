"use client"

import Link from "next/link";
import { Lobster_Two } from "next/font/google";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";

const lobster = Lobster_Two({ subsets: ['latin'], weight: "700" });

export default function Navbar() {
  const pathName = usePathname();

  const session = true;
  const isAdmin = true;

  return (
    <header className={styles.heading}>
      <div className={`${lobster.className} ${styles.logo}`}>Snappy</div>
      <nav className={styles.navigation}>
        <Link href="/" className={pathName === "/" && styles.active}>Homepage</Link>
        <Link href="/about" className={pathName === "/about" && styles.active}>About</Link>
        <Link href="/contact" className={pathName === "/contact" && styles.active}>Contact</Link>
        <Link href="/posts" className={pathName === "/posts" && styles.active}>Posts</Link>
        {session ? (
          <>
            {isAdmin && <Link href="/admin" className={pathName === "/admin" && styles.active}>Admin</Link>}
            <button type="button" className={styles.logout}>Logout</button>
          </>
        ) : (
          <Link href="/login" className={pathName === "/login" && styles.active}>Login</Link>
        )}
      </nav>
    </header>
  )
}
