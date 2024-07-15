"use client"
import React from "react";
import styles from '../ProjectCard/ProjectCard.module.css';

const ProjectCard = ({ project, onEdit, onDelete }) => {
  return (
    <div className={`${styles.card} fade-in`}>
      <img src={project.image} alt={project.name} className={styles.image} />
      <h3 className={styles.title}>{project.name}</h3>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.links}>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={project.prototypeLink} target="_blank" rel="noopener noreferrer">Prototype</a>
      </div>
      {onEdit && (
        <button onClick={() => onEdit(project)} className={styles.editButton}>
          Edit
        </button>
      )}
      {onDelete && (
        <button onClick={() => onDelete(project.id)} className={styles.deleteButton}>
          Delete
        </button>
      )}
    </div>
  );
};

export default ProjectCard;