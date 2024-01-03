import Image from "next/image";
import styles from "./about.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.desc}>
        <h1>About Us</h1>
        <p>We help people connect online.</p>
      </div>
      <div className={styles.imageDiv}>
        <Image src="/social.png" alt="Women Scrolling the app" fill />
      </div>
    </section>
  )
}
