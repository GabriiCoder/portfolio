"use client"
import { useState } from 'react';
import styles from '../Sidebar/Sidebar.module.css';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={isOpen ? `${styles.sidebar} ${styles.open}` : styles.sidebar}>
        <button className={styles.closeButton} onClick={toggleSidebar}>×</button>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
      <button className={styles.menuButton} onClick={toggleSidebar}>☰</button>
    </>
  );
}