import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Reserve() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation');
  };

  return (
    <div className = "reserve-form">
        <div className="container-8" style={{ padding: '2rem' }}>
        <h2>Reserve a Table</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, gap: '1rem' }}>
            <label>
            Name:
            <input type="text" name="name" value={formData.text} onChange={handleChange} required />
            </label>
            <label>
            E-mail Address:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
            Date:
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
            </label>
            <label>
            Time:
            <input type="time" name="time" value={formData.time} onChange={handleChange} required />
            </label>
            <label>
            Number of Guests:
            <input
                type="number"
                name="guests"
                min="1"
                max="20"
                value={formData.guests}
                onChange={handleChange}
                required
            />
            </label>
            <label>
            Occasion:
            <select name="occasion" value={formData.occasion} onChange={handleChange} required>
                <option value="">Select occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="business">Business Meeting</option>
                <option value="casual">Casual Dining</option>
            </select>
            </label>
            <button class = "button-reserve" type="submit">
            Submit Reservation
            </button>
        </form>
        </div>
    </div>
  );
}

export default Reserve;
