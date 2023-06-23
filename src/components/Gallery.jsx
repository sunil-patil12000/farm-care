import React from 'react';
import './GalleryPage.css';

const GalleryPage = () => {
    return (
        <div className="gallery-container">
            <h1 className="gallery-title">Gallery Page</h1>
            <div className="gallery-grid">
                <div className="gallery-item">
                    <img src="/img/g1.jpg" alt="Image 1" />
                </div>
                <div className="gallery-item">
                    <img src="/img/g2.jpg" alt="Image 2" />
                </div>
                <div className="gallery-item">
                    <img src="/img/g3.jpg" alt="Image 3" />
                </div>
                {/* Add more gallery items here */}
            </div>
        </div>
    );
};

export default GalleryPage;
