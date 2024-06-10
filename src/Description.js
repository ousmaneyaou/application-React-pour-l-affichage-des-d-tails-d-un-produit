import React from 'react';
import product from './Product';

const Description = () => {
  return (
    <p className="card-text">{product.description}</p>
  );
};

export default Description;
