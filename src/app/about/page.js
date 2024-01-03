import Image from "next/image";
import styles from "./about.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.desc}>
        <h1>About Us</h1>
        <p>We help people connect online.</p>
        <p>Our goal is to help the people around the world to share each other's culture and lifestyles through pictures. Since pictures tell a story of their own. Our website allows people to share pictures and talk about it with others.</p>
        <p>Let's connect with the WORLD!</p>
      </div>
      <div className={styles.imageDiv}>
        <Image src="/social.png" alt="Women Scrolling the app" fill />
      </div>
    </section>
  )
}
