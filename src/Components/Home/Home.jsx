import React from 'react';
import { Helmet } from 'react-helmet';
import { Code2, Rocket, Users, Zap, Shield, LineChart } from 'lucide-react';
import './Home.css';
import { Link } from 'react-scroll';
import SplitText from '../Split/SplitText';
import TrueFocus from '../True-focus/TrueFocus';
import BlurText from '../Split/SplitText';
import ShinyText from '../ShinyText/ShinyText';
import Button from '../Mini-Components/Button';
import SpotlightCard from '../Mini-Components/SpotlightCard/SpotlightCard';
import StarBorder from '../Mini-Components/StarBorder/StarBorder';
import HeroImageSlider from '../Mini-Components/HeroImageSlider/HeroImageSlider';

const features = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Modern Technology",
    description: "Built with cutting-edge tech stack for optimal performance"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Fast Development",
    description: "Quick turnaround without compromising quality"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "User-Centric",
    description: "Focused on delivering the best user experience"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "High Performance",
    description: "Optimized for speed and efficiency"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure & Reliable",
    description: "Built with security best practices"
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Scalable Solutions",
    description: "Grows with your business needs"
  }
];

function Home() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <div className="home-container">
      <Helmet>
        <title>Stackaura - Where Ideas Meet Impeccable Design</title>
        <meta
          name="description"
          content="Transform your digital vision into reality with StackAura. We create innovative, scalable, and secure digital solutions tailored to your business needs."
        />
        <meta name="keywords" content="Web Solutions, Digital Transformation, Modern Websites, Scalable Web Design, Secure Applications, Custom Software Development, Business Growth, UX/UI Design, SEO Optimization" />
        <meta name="author" content="StackAura" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.stackaura.in" />
        <meta property="og:title" content="Stackaura - Where Ideas Meet Impeccable Design" />
        <meta property="og:description" content="Experience excellence in digital solutions with StackAura. Innovative, scalable, and secure services to elevate your business." />
        <meta property="og:url" content="https://www.stackaura.in" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-heading">
              <SplitText text='Transform Your' delay='100'/> <br /><SplitText text='Digital vision Into' delay='200'/><br /><SplitText text='Reality' delay='700'/> 
            </h1> 
            <p className="hero-description">
              <ShinyText text='We create innovative digital solutions that help businesses thrive in the modern world. 
              Experience excellence in every pixel.'/>
            </p>
            <Link to="pricing" smooth={true} duration={500} spy={true} offset={-70} className="hero-button">
              <Button text='Get Started'/>
            </Link>
          </div>
          <div className="hero-image-container">
            <HeroImageSlider/>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="features-heading"><ShinyText text="Why Choose Us"/></h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <SpotlightCard key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title"><ShinyText text={feature.title}/></h3>
              <p className="feature-description"><ShinyText text={feature.description}/></p>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* CTA Section */} 
      <SpotlightCard StarBorder className="cta-section">
        <div className="">
          <h2 className=""><ShinyText text="Ready to Start Your Project?"/></h2>
          <p className="">
            <ShinyText text="Join hundreds of satisfied clients who have transformed their digital presence with us."/>
          </p>
          <Link to="contact" smooth={true} duration={500} spy={true} offset={-70} className="cta-button">
            <Button text="Contact Us Now"/>
          </Link>
        </div>      
      </SpotlightCard>
    </div>
  );
}

export default Home;
