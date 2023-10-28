import React from 'react';

function Concept({ image, title, description }) {
  return (
    <li className="concept"  key={title}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

export default Concept;
