import React from 'react';
import styles from './MainContent.module.css';
import { useEffect } from 'react';

const MainContent = () => {
  useEffect(() => {
    const nameElement = document.querySelector(`.${styles.name}`);
    const descElement = document.querySelector(`.${styles.description}`);
    nameElement.classList.add(styles.show);
    setTimeout(() => {
      descElement.classList.add(styles.show);
    }, 2000);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.name}>Gabriela</h1>
        <p className={styles.description}>
          Desarrolladora web full stack apasionada por la tecnología y la ciberseguridad. Siempre en busca de nuevos desafíos y oportunidades para aprender.
        </p>
      </div>
      <div className={styles.neurons}></div>
    </main>
  );
};

export default MainContent;