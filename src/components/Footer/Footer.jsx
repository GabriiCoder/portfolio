import React from 'react';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2024 [Gabriela]. Todos los derechos reservados.</p>
        <div className={styles.socials}>
          <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;