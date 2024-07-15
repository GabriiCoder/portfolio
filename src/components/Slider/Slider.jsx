'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';
import styles from '../Slider/Slider.module.css';

const Slider = ({ projects }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + projects.length) % projects.length);
  };

  return (
    <div className={styles.slider}>
      <button className={styles.prev} onClick={prevSlide}>Previous</button>
      <ProjectCard project={projects[current]} />
      <button className={styles.next} onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slider;