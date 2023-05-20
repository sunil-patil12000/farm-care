import React, { useState } from 'react';
import './pu.css';
import axios from 'axios';

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
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('productimg', image);

    const res = await axios.post('http://localhost:4545/api/product/add', formData);
    console.log(res.data);

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

        {image && <img src={URL.createObjectURL(image)} alt="Product" className="preview-image" />}

        <button type="submit" className="upload-button">Upload</button>
      </form>
    </div>
  );
};

export default ProductUploadPage;
