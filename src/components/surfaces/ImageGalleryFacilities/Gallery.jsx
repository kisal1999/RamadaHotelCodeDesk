import React from 'react';

const Gallery = ({ images }) => {
  return (
    <div className="image-gallery-container">
      {images.map((image, index) => (
        <div key={index} className="image-item">
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;