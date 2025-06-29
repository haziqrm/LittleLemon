import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
    const navigate = useNavigate();
    return (
        <div className="hero">
        <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button onClick={() => navigate('/reserve')}>
                Reserve a Table
            </button>
        </div>
        <img src="/assets/restaurantfood.jpg" alt="Restaurant" className="hero-image" width="250px" />
        </div>
    );
}

export default HeroSection;