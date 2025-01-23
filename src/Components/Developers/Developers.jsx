import React from 'react';
import { Code2, Database, Github } from 'lucide-react';
import './Developers.css';

const DeveloperCard = ({ name, role, github }) => (
  <div className="developer-card">
    <div className="role-icon">
      {role.toLowerCase().includes('frontend') ? 
        <Code2 className="icon" size={24} /> : 
        <Database className="icon" size={24} />
      }
    </div>
    <div className="card-content">
      <div className="name-section">
        <div className="pencil-icon"></div>
        <h3>{name}</h3>
      </div>
      <p>{role}</p>
      {/* <a href={github} className="github-link" target="_blank" rel="noopener noreferrer">
        <Github size={20} />
      </a> */}
    </div>
  </div>
);

function Developers() {
  const developers = [
    {
      name: "Rakshit Waghmare",
      role: "Development Head",
      github: "https://github.com"
    },
    {
      name: "Shubham Chhatre",
      role: "DevOps Lead",
      github: "https://github.com"
    },
    {
      name: "Samyak Mendhe",
      role: "Analytics Lead",
      github: "https://github.com"
    },
    {
      name: "Vaibhav Wagh",
      role: "Ui/Ux Lead",
      github: "https://github.com"
    },
    {
      name: "Kunal Tagde",
      role: "Head of Marketing",
      github: "https://github.com"
    },
    {
      name: "Swapnil Tripathi",
      role: "Chief Financial Officer",
      github: "https://github.com"
    }
  ];

  return (
    <section className="developers" id="developers">
      <div className="developers-container">
        <div className="section-header">
          <h2>Meet Our Team</h2>
          <p>The creative minds behind our exceptional web solutions</p>
        </div>
        
        <div className="developers-grid">
          {developers.map((dev, index) => (
            <DeveloperCard key={index} {...dev} />
          ))}
        </div>
      </div>
      
      <div className="grid-background"></div>
    </section>
  );
}

export default Developers;