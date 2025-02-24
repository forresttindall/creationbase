import React from 'react';
import { Link } from 'react-router-dom';
import './ClearFeed.css';
import clearfeedImage from './Images/clearfeed.png';

const ClearFeed = () => {
    return (
        <div className="clearfeed-section" id="technologies">
            <div className="clearfeed-content">
                <div className="clearfeed-text">
                    <span className="eyebrow">ClearFeed</span>
                    <h1 className="headline">Simple, local RSS feed reader for your desktop</h1>
                    
                    <div className="feature-preview">
                        <p>Take control of your information sources with an intuitive, locally-stored, private feed reader.</p>
                    </div>

                    <div className="cta-group">
                        <Link to="/blog/clearfeed-updates" className="clearfeed-button">
                            Learn More
                            <span className="button-arrow">→</span>
                        </Link>
                    </div>
                </div>

                <Link to="/blog/clearfeed-updates" className="clearfeed-image">
                    <img src={clearfeedImage} alt="ClearFeed Interface" />
                </Link>
            </div>
        </div>
    );
};

export default ClearFeed;
