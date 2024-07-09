import React from 'react';
import styles from './MainContent.module.css';

const MainContent = () => {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <img src="images/Likedlin.png" alt="Foto de Gabriela" className={styles.photo} />
        <div className={styles.text}>
          <h2>¡Hola, soy Gabriela!</h2>
          <p>Soy una desarrolladora web full stack con una pasión insaciable por la tecnología y la innovación. Cada día me motiva aprender nuevas tecnologías y explorar el fascinante mundo de la ciberseguridad. Creo firmemente en la importancia de crear soluciones eficientes, seguras y accesibles. Mi objetivo es seguir creciendo profesionalmente, enfrentando nuevos desafíos que me permitan mejorar mis habilidades y contribuir significativamente a la industria tecnológica.</p>
        </div>
      </div>
      <div className={styles.neurons}></div>
    </main>
  );
};

export default MainContent;
