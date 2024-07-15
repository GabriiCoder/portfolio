"use client"
import React from 'react'
import { useState } from 'react';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import styles from '../Projects/Projects.module.css';

const projects = [
  {
    id: 1,
    name: 'Project One',
    description: 'This is the first project.',
    image: '/images/project1.jpg',
    githubLink: 'https://github.com/yourusername/project-one',
    prototypeLink: 'https://prototype-link.com/project-one',
  },
  // Más proyectos aquí
];

export default function ProjectsPage() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages));
  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));

  const displayedProjects = projects.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <main className={`${styles.projects} fade-in`}>
      <h1>Projects</h1>
      <div className={styles.projectList}>
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className={styles.pagination}>
        <button onClick={handlePrev} disabled={page === 1}>Previous</button>
        <button onClick={handleNext} disabled={page === totalPages}>Next</button>
      </div>
    </main>
  );
}