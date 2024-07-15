import React from 'react'
import styles from './Home.module.css'

export default function HomePage() {
  const name = "Gabriela";
  
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>
          {name.split('').map((letter, index) => (
            <span key={index} className={styles.letter}>{letter}</span>
          ))}
        </h1>
        <p className={styles.heroSubtitle}>
          Desarrolladora Web Fullstack con motivación por seguir aprendiendo para mejorar cada día como programadora.
        </p>
      </div>
    </main>
  );
}