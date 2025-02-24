import React from 'react';
import './About.css';
import { 
  UserFocus, 
  Shapes 
} from "@phosphor-icons/react";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-content">
        <span className="about-eyebrow">About Us</span>
        <h1 className="about-title">
          Software that puts <span className="gradient">your needs</span> first.
        </h1>
        <p className="about-description">
          At Creationbase, we build software differently. Starting with you—the user—we create 
          solutions that make a real difference in your daily life.
        </p>
        
        <div className="about-grid">
          <div className="about-card">
            <div className="card-header">
              <UserFocus 
                size={24} 
                weight="duotone" 
                style={{
                  fill: 'url(#gradient)',
                  color: 'url(#gradient)'
                }}
              />
              <h3 className="card-title">Built For You</h3>
            </div>
            <p>
              Every feature starts with understanding your needs. We create software that makes 
              your life easier, more productive, and more enjoyable.
            </p>
          </div>
          
          <div className="about-card">
            <div className="card-header">
              <Shapes 
                size={24} 
                weight="duotone" 
                style={{
                  fill: 'url(#gradient)',
                  color: 'url(#gradient)'
                }}
              />
              <h3 className="card-title">Shaped By You</h3>
            </div>
            <p>
              Your feedback shapes our direction. We build tools we want to use ourselves, 
              enhancing how you work, create, and connect.
            </p>
          </div>
        </div>
      </div>

      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="20%" stopColor="#e6683c" />
            <stop offset="40%" stopColor="#dc2743" />
            <stop offset="60%" stopColor="#cc2366" />
            <stop offset="80%" stopColor="#bc1888" />
            <stop offset="100%" stopColor="#7b3fff" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default About;