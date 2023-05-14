import React, { useState } from 'react';
import './af.css';

const AgriculturalDiseasesForm = ({ onFormSubmit }) => {
  const [name, setName] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [treatment, setTreatment] = useState('');
  const [prevention, setPrevention] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new disease object
    const newDisease = {
      name,
      symptoms,
      treatment,
      prevention,
      description,
      image,
    };

    // Pass the new disease object to the onFormSubmit callback function
    onFormSubmit(newDisease);

    // Reset form fields
    setName('');
    setSymptoms('');
    setTreatment('');
    setPrevention('');
    setDescription('');
    setImage('');
  };

  return (
    <form className="agricultural-diseases-form" onSubmit={handleSubmit}>
      <h2>Upload Agricultural Disease</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="symptoms">Symptoms:</label>
        <textarea
          id="symptoms"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="treatment">Treatment:</label>
        <textarea
          id="treatment"
          value={treatment}
          onChange={(e) => setTreatment(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="prevention">Prevention:</label>
        <textarea
          id="prevention"
          value={prevention}
          onChange={(e) => setPrevention(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image:</label>
        <input
        className='input-field'
          type="file"
          id="image"
          value={image}
          onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AgriculturalDiseasesForm;
