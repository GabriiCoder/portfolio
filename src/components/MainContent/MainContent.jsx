import React from 'react';
import styles from './MainContent.module.css';

const MainContent = () => {
  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <h2>¡Hola, soy Gabriela!</h2>
        <p>Soy una desarrolladora web full stack apasionada por crear aplicaciones web modernas y eficientes. Explora mi portafolio para conocer más sobre mis proyectos y habilidades.</p>
      </section>
      
      <section className={styles.links}>
        <a href="/about" className={styles.link}>Sobre Mí</a>
        <a href="/projects" className={styles.link}>Proyectos</a>
        <a href="/skills" className={styles.link}>Habilidades</a>
        <a href="/contact" className={styles.link}>Contacto</a>
      </section>
    </main>
  );
};

export default MainContent;