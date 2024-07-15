import React from 'react'

export default function AboutPage() {
  return (
    <main className="fade-in">
      <h1>About Me</h1>
      <p>Information about yourself.</p>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="mailto:youremail@example.com">Email</a>
    </main>
  );
}