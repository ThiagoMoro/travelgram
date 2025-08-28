import React from "react";
import './Gallery.css';

const images = Array.from({ length: 12 }, (_, i) => `/assets/images/image${String(i + 1).padStart(2, "0")}.png`);

export default function Gallery() {
  return (
    <>
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Travel photo ${index + 1}`} />
      ))}
    </>
  );
}
