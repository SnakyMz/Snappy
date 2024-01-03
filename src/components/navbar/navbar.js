"use client"

import Link from "next/link";
import { Lobster_Two } from "next/font/google";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { TiThMenu, TiDelete } from "react-icons/ti";

const lobster = Lobster_Two({ subsets: ['latin'], weight: "700" });

export default function Navbar() {
  const pathName = usePathname();

  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = true;

  return (
    <header className={styles.heading}>
      <div className={`${lobster.className} ${styles.logo}`}>Snappy</div>
      <nav className={styles.navigation}>
        <Link href="/" className={pathName === "/" ? styles.active : undefined}>Homepage</Link>
        <Link href="/about" className={pathName === "/about" ? styles.active : undefined}>About</Link>
        <Link href="/contact" className={pathName === "/contact" ? styles.active : undefined}>Contact</Link>
        <Link href="/posts" className={pathName === "/posts" ? styles.active : undefined}>Posts</Link>
        {session ? (
          <>
            {isAdmin && <Link href="/admin" className={pathName === "/admin" ? styles.active : undefined}>Admin</Link>}
            <button type="button" className={styles.logout}>Logout</button>
          </>
        ) : (
          <Link href="/login" className={pathName === "/login" ? styles.active : undefined}>Login</Link>
        )}
      </nav>
      <button type="button" className={styles.menuBtn} onClick={() => setOpen(prev => !prev)}>
        {open ? <TiDelete /> : <TiThMenu />}
      </button>
      {
        open ? <nav className={styles.mobileNavigation}>
          <Link href="/" className={pathName === "/" ? styles.active : undefined}>Homepage</Link>
          <Link href="/about" className={pathName === "/about" ? styles.active : undefined}>About</Link>
          <Link href="/contact" className={pathName === "/contact" ? styles.active : undefined}>Contact</Link>
          <Link href="/posts" className={pathName === "/posts" ? styles.active : undefined}>Posts</Link>
          {session ? (
            <>
              {isAdmin ? <Link href="/admin" className={pathName === "/admin" ? styles.active : undefined}>Admin</Link> : undefined}
              <button type="button" className={styles.logout}>Logout</button>
            </>
          ) : (
            <Link href="/login" className={pathName === "/login" ? styles.active : undefined}>Login</Link>
          )}
        </nav> : undefined
      }
    </header>
  )
}
