"use client"
import React from 'react'
import { useState } from 'react';
import ProjectCard from '../../../Components/ProjectCard/ProjectCard';

const initialProjects = [
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

export default function AdminDashboard() {
  const [projectList, setProjectList] = useState(initialProjects);

  const addProject = (project) => {
    setProjectList([...projectList, project]);
  };

  const updateProject = (updatedProject) => {
    setProjectList(
      projectList.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      )
    );
  };

  const deleteProject = (projectId) => {
    setProjectList(projectList.filter((project) => project.id !== projectId));
  };

  return (
    <main className="fade-in">
      <h1>Admin Dashboard</h1>
      <button onClick={() => console.log("Logic to open add project form")}>
        Add Project
      </button>
      {projectList.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onEdit={updateProject}
          onDelete={deleteProject}
        />
      ))}
    </main>
  );
}