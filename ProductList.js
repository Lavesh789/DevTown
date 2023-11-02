import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProductCard = styled.div`
  width: 300px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
`;

const ProductImage = styled.img`
  max-width: 100%;
`;

const ProductTitle = styled.h3``;

const ProductDescription = styled.p``;

const ProductPrice = styled.p``;

const ProductList = ({ products }) => {
  const [sortBy, setSortBy] = useState('price');
  const [filterCategory, setFilterCategory] = useState('all');

  // Sorting function
  const sortedProducts = [...products].sort((a, b) =>
    sortBy === 'price' ? a.price - b.price : a.title.localeCompare(b.title)
  );

  // Filtering function
  const filteredProducts =
    filterCategory === 'all'
      ? sortedProducts
      : sortedProducts.filter((product) => product.category === filterCategory);

  return (
    <div>
      <label>
        Sort By:
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="price">Price</option>
          <option value="title">Title</option>
        </select>
      </label>
      <label>
        Filter By:
        <select onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
        </select>
      </label>
      <Container>
        {filteredProducts.map((product, index) => (
          <ProductCard key={index}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>${product.price}</ProductPrice>
          </ProductCard>
        ))}
      </Container>
    </div>
  );
};

export default ProductList;