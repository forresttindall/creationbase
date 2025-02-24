import React, { useState } from 'react';
import './Newsletter.css';
import { blastConfetti } from './utils/confetti';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('');

        try {
            const response = await fetch('https://api.sender.net/v2/path', { // Path to your list
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer XXXXXXXXX', // Add Bearer Token
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    firstName: firstName,
                    groups: ['Newsletter']
                })
            });

            if (response.ok) {
                setStatus('success');
                setEmail('');
                setFirstName('');
                blastConfetti();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="newsletter-container" id="newsletter">
            <div className="newsletter-content">
                <span className="newsletter-eyebrow">Stay Connected</span>
                <h2>Join Our <span className="gradient">Newsletter</span></h2>
                <p>Get exclusive insights, tech updates, and early access to our latest innovations.</p>
                
                <form onSubmit={handleSubmit} className="newsletter-form">
                    <div className="input-group">
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First name"
                            required
                            className="newsletter-input"
                        />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="newsletter-input"
                        />
                        <button 
                            type="submit" 
                            className={`newsletter-button ${isSubmitting ? 'submitting' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                            <span className="button-arrow">→</span>
                        </button>
                    </div>

                    {status === 'success' && (
                        <div className="status-message success">
                            Welcome aboard, {firstName}! 🚀 Check your inbox for a confirmation.
                        </div>
                    )}
                    
                    {status === 'error' && (
                        <div className="status-message error">
                            Oops! Something went wrong. Please try again.
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Newsletter;
