import React, { useState } from 'react';

const QuantityPriceControl = () => {
  // Initial states
  const [quantity, setQuantity] = useState(1); // Initial quantity
  const [price, setPrice] = useState(100); // Initial price per unit
  const unitPrice = 100; // Price per unit

  // Increment function
  const increment = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    setPrice(prevPrice => Number(prevPrice) + unitPrice);
  };

  // Decrement function
  const decrement = () => {
    if (quantity > 1) { // Ensure quantity doesn't go below 1
      setQuantity(prevQuantity => prevQuantity - 1);
      setPrice(prevPrice => Number(prevPrice) - unitPrice);
    }
  };

  return (
    <div className="d-flex align-items-center">
      <input className='form-control text-center me-3' type="button" value='-' style={{ maxWidth: '3rem' }} onClick={decrement} />
      <input
        className="form-control text-center me-3"
        id="inputQuantity"
        type="button"
        value={quantity}
        readOnly
        style={{ maxWidth: '3rem' }}
      />
      <input className='form-control text-center me-3' type="button" value='+' style={{ maxWidth: '3rem' }} onClick={increment} />
      
      {/* Display the price */}
      <div className="ms-3">
        <strong>Price: ${price.toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default QuantityPriceControl;
