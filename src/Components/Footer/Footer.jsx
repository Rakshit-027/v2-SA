import React from 'react';
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';
import {Link} from 'react-scroll'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="company-info">
            <h3 className="footer-title">StackAura</h3>
            <p className="company-description">
              Creating innovative solutions for tomorrow's challenges. Join us in building the future.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link">
                <Github size={20} />
              </a>
              <a href="#" className="social-link">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="quick-links">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-list">
              <li><Link to ='about' smooth={true} duration={700} spy={true} offset={-60} className="footer-link">About Us</Link></li>
              <li><Link to ='services' smooth={true} duration={700} spy={true} offset={-50}  className="footer-link">Services</Link></li>
              <li><Link to ='pricing' smooth={true} duration={700} spy={true} offset={-50} className="footer-link">Pricing</Link></li>
              <li><Link to ='contact' smooth={true} duration={700} spy={true} offset={-50} className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="contact-list">
              <li className="contact-item">
                <Phone size={16} />
                <span>(+91)-7218616068</span>
              </li>
              <li className="contact-item">
                <Mail size={16} />
                <span>Info@StackAura.in</span>
              </li>
              <li className="contact-item">
                <MapPin size={16} />
                <span>Nagpur India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} StackAura . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
