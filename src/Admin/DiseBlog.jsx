import React, { useEffect, useState } from 'react';
import './af.css';
import axios from 'axios';

const AgriculturalDiseasesForm = () => {
  const [name, setName] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [treatment, setTreatment] = useState('');
  const [prevention, setPrevention] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);




  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('symptoms', symptoms);
      formData.append('treatment', treatment);
      formData.append('prevention', prevention);
      formData.append('description', description);
      formData.append('image', image);

      const response = await axios.post('http://localhost:4545/uploadblog', formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };






  const filechenge = (e) => {
    setImage(e.target.files[0]);
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
          onChange={(e) => filechenge(e)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AgriculturalDiseasesForm;






