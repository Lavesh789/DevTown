import React, { useState } from 'react';
import ProductList from './ProductList';

const products = [
  {
    title: 'Product 1',
    description: 'Description of Product 1',
    price: 10.99,
    category: 'category1',
    image: 'product1.jpg',
  },
  // Add more products here
];

const App = () => {
  // Implement pagination logic here

  return (
    <div>
      <h1>Product List</h1>
      <ProductList products={products} />
      {/* Implement pagination component */}
    </div>
  );
};

export default App;