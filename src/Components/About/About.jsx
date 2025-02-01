import React, { useState, useEffect, useRef } from 'react';
import { Users, Rocket, Code2, Trophy } from 'lucide-react';
import './About.css';
import { Link, Element } from 'react-scroll';
import ShinyText from '../ShinyText/ShinyText';
import SpotlightCard from '../Mini-Components/SpotlightCard/SpotlightCard';
import Button from '../Mini-Components/Button';
import StarBorder from '../Mini-Components/StarBorder/StarBorder';
import CountUp from '../Mini-Components/Count/CountUp';

const About = () => {
  const [startCounting, setStartCounting] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setStartCounting(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <Element name="about" className="about-container">
      <head>
        <title>About Us - StackAura</title>
        <meta name="description" content="Learn more about StackAura, a team dedicated to delivering cutting-edge web solutions to empower businesses in the digital age." />
        <meta name="keywords" content="web development, digital solutions, business growth, StackAura, website design, SEO services" />
        <meta name="author" content="StackAura" />
        <meta property="og:title" content="About Us - StackAura" />
        <meta property="og:description" content="Discover how StackAura transforms ideas into reality with innovative web solutions and expert services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.stackaura.com/about" />
        <meta property="og:image" content="https://www.stackaura.com/images/about-banner.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "StackAura",
            "url": "https://www.stackaura.com",
            "logo": "https://www.stackaura.com/images/logo.png",
            "description": "A leading provider of innovative web solutions for businesses and startups.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-800-555-0199",
              "contactType": "Customer Support"
            }
          })}
        </script>
      </head>
      <section className="hero-section">
        <h1 className="gradient-text">
          <ShinyText text="Transforming Ideas into Digital Reality" />
        </h1>
        <p className="subtitle">
          <ShinyText text="Innovative Solutions for Tomorrow's Challenges" />
        </p>
      </section>

      <section className="stats-section" ref={statsRef}>
        <StarBorder className="stat-card">
          <h3>{startCounting && <CountUp from={0} to={24} />}+</h3>
          <p><ShinyText text="Projects Completed" /></p>
        </StarBorder>
        <StarBorder className="stat-card">
          <h3>{startCounting && <CountUp from={0} to={20} />}+</h3>
          <p><ShinyText text="Happy Clients" /></p>
        </StarBorder>
        <StarBorder className="stat-card">
          <h3>{startCounting && <CountUp from={0} to={10} />}+</h3>
          <p><ShinyText text="Team Experts" /></p>
        </StarBorder>
        <StarBorder className="stat-card">
          <h3>{startCounting && <CountUp from={0} to={3} />}+</h3>
          <p><ShinyText text="Years of Experience" /></p>
        </StarBorder>
      </section>

      <section className="mission-section">
        <div className="mission-content">
          <h2><ShinyText text="Our Mission" /></h2>
          <p><ShinyText text="We're dedicated to delivering cutting-edge web solutions that empower businesses to thrive in the digital age." /></p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
          alt="Team collaboration working on a project"
          className="mission-image"
        />
      </section>

      <section className="features-section">
        <h2><ShinyText text="Why Choose Us" /></h2>
        <div className="features-grid">
          <SpotlightCard className="feature-card">
            <Users className="feature-icon" />
            <h3><ShinyText text="Expert Team" /></h3>
            <p><ShinyText text="Skilled professionals dedicated to your success" /></p>
          </SpotlightCard>
          <SpotlightCard className="feature-card">
            <Rocket className="feature-icon" />
            <h3><ShinyText text="Innovation First" /></h3>
            <p><ShinyText text="Cutting-edge solutions for modern challenges" /></p>
          </SpotlightCard>
          <SpotlightCard className="feature-card">
            <Code2 className="feature-icon" />
            <h3><ShinyText text="Quality Code" /></h3>
            <p><ShinyText text="Clean, maintainable, and scalable development" /></p>
          </SpotlightCard>
          <SpotlightCard className="feature-card">
            <Trophy className="feature-icon" />
            <h3><ShinyText text="Proven Results" /></h3>
            <p><ShinyText text="Track record of successful deliveries" /></p>
          </SpotlightCard>
        </div>
      </section>

      <SpotlightCard className="cta-section">
        <h2><ShinyText text="Ready to Start Your Project?" /></h2>
        <p><ShinyText text="Let's transform your vision into reality" /></p>
        <Link to="pricing" smooth={true} duration={700} spy={true} offset={-50} className="cta-button">
          <Button text="Get Started" />
        </Link>
      </SpotlightCard>
    </Element>
  );
};

export default About;
