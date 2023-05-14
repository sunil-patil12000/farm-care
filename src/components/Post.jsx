import React from 'react';
import './post.css'; // Import CSS file for styling

const Post = ({ name, symptoms, treatment, prevention, description, image }) => {
  return (
    <div className="agricultural-disease-post">
      <img src='/images/about-img.jpg' alt={name} className="disease-image" />
      <h2 className="disease-name">{name}</h2>
      <p className="disease-description">{description}</p>
      <div className="disease-details">
        <h3 className="section-heading">Symptoms:</h3>
        <p>{symptoms}</p>
        <h3 className="section-heading">Treatment:</h3>
        <p>{treatment}</p>
        <h3 className="section-heading">Prevention:</h3>
        <p>{prevention}</p>
      </div>
    </div>
  );
};

export default Post;
