"use client"
import styles from './Navbar.module.css';
export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.navLeft}>
        <a href="/" className={styles.navLink}>Home</a>
      </div>
      <nav className={styles.nav}>
        <a href="/#about" className={styles.navLink}>About</a>
        <a href="/#projects" className={styles.navLink}>Projects</a>
        <a href="/#skills" className={styles.navLink}>Skills</a>
        <a href="/#contact" className={styles.navLink}>Contact</a>
      </nav>
    </header>
  );
}