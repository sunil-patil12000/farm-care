import React, { useState } from 'react';
import './pu.css'

const ProductUploadPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform product upload logic here

    // Reset form fields
    setTitle('');
    setDescription('');
    setPrice('');
    setImage(null);
  };

  return (
    <div className="container3">
      <h1 className="page-title">Product Upload</h1>
      <form onSubmit={handleSubmit} className="upload-form">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          required
          className="input-field"
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          required
          className="input-field"
        ></textarea>

        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={handlePriceChange}
          required
          className="input-field"
        />

        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          required
          className="input-field"
        />

        {image && <img src={image} alt="Product" className="preview-image" />}

        <button type="submit" className="upload-button">Upload</button>
      </form>
    </div>
  );
};

export default ProductUploadPage;
