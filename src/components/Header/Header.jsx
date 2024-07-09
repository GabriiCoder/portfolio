"use client"
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>[Tu Nombre]</h1>
          <p>Desarrolladora Web Full Stack</p>
        </div>
        <nav>
          <ul className={styles.navList}>
            <li><a href="#about" className={styles.navLink}>Sobre Mí</a></li>
            <li><a href="#projects" className={styles.navLink}>Proyectos</a></li>
            <li><a href="#skills" className={styles.navLink}>Habilidades</a></li>
            <li><a href="#contact" className={styles.navLink}>Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;