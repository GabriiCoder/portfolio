"use client"
import React from 'react';
import { useEffect, useRef } from 'react';
import styles from './RotatingSpiral.module.css';

export default function RotatingSpiral() {
  const spiralRef = useRef();

  useEffect(() => {
    const spiral = spiralRef.current;
    let rotation = 0;
    const animate = () => {
      rotation += 1;
      spiral.style.transform = `rotate(${rotation}deg)`;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return <img src="code-spiral.svg" className={styles.spiral} ref={spiralRef} alt="Spiral" />;
}