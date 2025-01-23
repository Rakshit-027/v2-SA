import React, { useEffect, useState } from "react";
import "./Project.css";

const ProjectCard = ({ title, description, image, link }) => (
  <div className="project-card">
    <img src={image || "/placeholder.svg"} alt={title} className="project-image" />
    <div className="project-info">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} className="project-link">
        Learn More
      </a>
    </div>
  </div>
);

const ProjectShowcase = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Rakshit-027/Projects-db/main/Projects.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch project data");
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);
  

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error loading projects: {error}</p>;

  return (
    <div className="project-showcase">
      <h2>Our Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
