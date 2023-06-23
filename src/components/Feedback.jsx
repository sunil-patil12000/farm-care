import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission
        alert("Thank You For Your FeedBack")

        setFormData({ name: '', email: '', feedback: '' });



    };

    return (
        <form className="feedback-form" onSubmit={handleSubmit}>
            <h2 className="form-title">Feedback Form</h2>
            <div className="form-group">
                <label htmlFor="name" className="form-label">Name:</label>
                <input type="text" id="name" name="name" className="form-input" value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" id="email" name="email" className="form-input" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="feedback" className="form-label">Feedback:</label>
                <textarea id="feedback" name="feedback" rows="4" className="form-input" value={formData.feedback} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
        </form>
    );
};

export default FeedbackForm;


