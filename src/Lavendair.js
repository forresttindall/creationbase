import React from 'react';
import './lavendair.css';
import lavendairLogo from './Images/lavendair.png';

const Lavendair = () => {
  return (
    <section className="airlinksection" id="technologies" aria-labelledby="airlinksection-title">
      <div className="painpoints-container">
        <div className="painpoints-content">
            <div className="lavendair-logo-container">

          
          <p className="overline">Data Integration</p>
          <img 
            className="" 
            src={lavendairLogo} 
            alt="Lavendair logo" 
            width="200" 
          />
            </div>
          <h2 className="headline">Your data, where you need it.</h2>
          <p className="subheadline">
            Lavendair is a software solution that connects your real-time air quality data from PurpleAir sensors to your data dashboard to help you make informed decisions about the environment.
          </p>
          <div className="cta-group">
            <a href="https://lavendair.io" target="_blank" rel="noopener noreferrer">
              <button className="lavendair-button">
                Get Started
                <span className="button-arrow">→</span>
              </button>
            </a>
          </div>
        </div>
        <div className="painpoints-visual">
          <div className="floating-card card-1">
            <div className="card-content">
              <div className="status-indicator"></div>
              <span>Real-time Air Quality Data</span>
            </div>
          </div>
          <div className="floating-card card-2">
            <div className="card-content">
              <div className="status-indicator blue"></div>
              <span>Setup Support</span>
            </div>
          </div>
          <div className="floating-card card-3">
            <div className="card-content">
              <div className="status-indicator purple"></div>
              <span>Up To Unlimited Sensors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lavendair;