import React, { useEffect, useState } from "react";
import "./Project.css";
import { Sparkles, ExternalLink, Loader2 } from 'lucide-react';
import ShinyText from "../ShinyText/ShinyText";

const ProjectCard = ({ title, description, image, link }) => (
  <div className="project-card">
    <div className="project-image-container">
      <img src={image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60"} 
           alt={title} 
           className="project-image" />
      <div className="project-overlay">
        <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
          <ExternalLink size={24} />
          <span>View Project</span>
        </a>
      </div>
    </div>
    <div className="project-info">
      <h3>{title}</h3>
      <p>{description}</p>
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

  if (loading) return (
    <div className="loading-state">
      <Loader2 className="spin" size={40} />
      <p>Loading amazing projects...</p>
    </div>
  );
  
  if (error) return (
    <div className="error-state">
      <p>Error loading projects: {error}</p>
    </div>
  );

  return (
    <div className="project-showcase">
      <div className="showcase-header">
        <h2>
          <Sparkles className="sparkle-icon" size={24} />
          <ShinyText text="Our Projects"/>
          <Sparkles className="sparkle-icon" size={24} />
        </h2>
        <p className="subtitle"><ShinyText text ="Discover our latest work and innovations"/></p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;