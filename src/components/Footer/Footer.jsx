"use client"
import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2024 Gabriela. All rights reserved.</p>
        <div className={styles.socials}>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <img src="/icons/github.svg" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="mailto:youremail@example.com">
            <img src="/icons/email.svg" alt="Email" />
          </a>
        </div>
      </div>
    </footer>
  );
}