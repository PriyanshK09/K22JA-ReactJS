// Develop a form for an event registration that requires user to input their name, email, and dietary preferences. Validate that the
// Dietary Preferences are selected from a predefined list

import React, { useState } from 'react';
import './DietaryPreference.css';

const DietaryPreference = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dietaryPreference: ''
    });

    const dietaryOptions = ['Vegetarian', 'Vegan', 'Gluten-Free', 'Non-Vegetarian'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.dietaryPreference) {
            alert('Please fill out all fields.');
            return;
        }
        if (!dietaryOptions.includes(formData.dietaryPreference)) {
            alert('Please select a valid dietary preference.');
            return;
        }
        alert('Form submitted successfully!');
    };

    return (
        <div className="DietaryPreference">
            <h1>Event Registration</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Dietary Preference:
                    <select name="dietaryPreference" value={formData.dietaryPreference} onChange={handleChange}>
                        <option value="">Select an option</option>
                        {dietaryOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
        </div>
    );
};

export default DietaryPreference;