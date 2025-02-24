import React from 'react';
import './QuantumKeep.css';
import quantumkeepImage from './Images/quantumkeep.JPG';

const QuantumKeep = () => {
    return (
        <div className="quantumkeep-section">
            <div className="quantumkeep-content">
                <a href="https://quantumkeep.io" target="_blank" rel="noopener noreferrer" className="quantumkeep-image">
                    <img src={quantumkeepImage} alt="QuantumKeep Interface" />
                </a>

                <div className="quantumkeep-text">
                    <span className="eyebrow">QuantumKeep</span>
                    <h1 className="headline">Quantum-Secured File Encryption</h1>
                    
                    <div className="feature-preview">
                        <p>Secure local file encryption powered by quantum randomness</p>
                    </div>

                    <div className="cta-group">
                        <a href="https://quantumkeep.io" target="_blank" rel="noopener noreferrer" className="quantumkeep-button">
                            Learn More
                            <span className="button-arrow">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuantumKeep;