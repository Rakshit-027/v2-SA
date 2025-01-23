import React from 'react';
import { Users, Rocket, Code2, Trophy, ArrowRight } from 'lucide-react';
import './About.css';
import { Link } from 'react-scroll';
import ShinyText from '../ShinyText/ShinyText';
import SpotlightCard from '../Mini-Components/SpotlightCard/SpotlightCard';
import Button from '../Mini-Components/Button';
const About = () => {
  return (
    <div className="about-container">
      <section className="hero-section">
        <h1 className="gradient-text">Transforming Ideas into Digital Reality</h1>
        <p className="subtitle"><ShinyText text="Innovative Solutions for Tomorrow's Challenges"/></p>
      </section>

      <section className="stats-section">
        <div className="stat-card">
          <h3>24+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat-card">
          <h3>20+</h3>
          <p>Happy Clients</p>
        </div>
        <div className="stat-card">
          <h3>15+</h3>
          <p>Team Experts</p>
        </div>
        <div className="stat-card">
          <h3>2+</h3>
          <p>Years Experience</p>
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>We're dedicated to delivering cutting-edge web solutions that empower businesses to thrive in the digital age. Our passion for innovation drives us to create seamless, scalable, and impactful digital experiences.</p>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
          alt="Team collaboration"
          className="mission-image"
        />
      </section>

      <section className="features-section">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <Users className="feature-icon" />
            <h3>Expert Team</h3>
            <p>Skilled professionals dedicated to your success</p>
          </div>
          <div className="feature-card">
            <Rocket className="feature-icon" />
            <h3>Innovation First</h3>
            <p>Cutting-edge solutions for modern challenges</p>
          </div>
          <div className="feature-card">
            <Code2 className="feature-icon" />
            <h3>Quality Code</h3>
            <p>Clean, maintainable, and scalable development</p>
          </div>
          <div className="feature-card">
            <Trophy className="feature-icon" />
            <h3>Proven Results</h3>
            <p>Track record of successful deliveries</p>
          </div>
        </div>
      </section>

      <SpotlightCard className="cta-section">
        <h2>Ready to Start Your Project?</h2>
        <p>Let's transform your vision into reality</p>
        <Link to='pricing' 
                        smooth={true}
                        duration={700}
                        spy={true}
                        offset={-50}className="cta-button">
          <Button text ="Get Started"/>
          {/* <ArrowRight className="arrow-icon" /> */}
        </Link>
      </SpotlightCard>
    </div>
  );
};

export default About;