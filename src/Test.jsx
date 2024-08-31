import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('all');

  useEffect(() => {
    // Fetch data from the API
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data); // Debug log
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    // Filter products based on the selected category
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === category);
      console.log('Filtered products:', filtered); // Debug log
      setFilteredProducts(filtered);
    }
  }, [category, products]);

  return (
    <div>
      <h1>Product List</h1>
      <div>
        <button onClick={() => setCategory('all')}>All</button>
        <button onClick={() => setCategory("men's clothing")}>Men's Clothing</button>
        <button onClick={() => setCategory("women's clothing")}>Women's Clothing</button>
        <button onClick={() => setCategory('jewelery')}>Jewelery</button>
        <button onClick={() => setCategory('electronics')}>Electronics</button>
      </div>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
