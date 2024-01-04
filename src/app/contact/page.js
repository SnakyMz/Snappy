import Image from "next/image";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.imageDiv}>
        <Image src="/contact.png" alt="Contact us" fill />
      </div>
      <form action="" className={styles.contactForm}>
        <h1>Contact Us</h1>
        <input type="text" name="fullname" placeholder="Enter your Fullname" id={styles.fullnameInput} required />
        <input type="email" name="email" placeholder="Enter your Email Address" id={styles.emailInput} required />
        <input type="tel" name="tel" placeholder="Enter your Contact Number (Optional)" pattern="[+]{1}[0-9]{11,14}" id={styles.telInput} />
        <textarea name="message" cols="30" rows="10" placeholder="Enter your Message" id={styles.messageInput} required />
        <button type="submit" id={styles.submitBtn}>Send</button>
      </form>
    </section>
  )
}
