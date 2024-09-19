// import React, { useState } from 'react';

// const QuantityPriceControl = () => {
//   // Initial states
//   const [quantity, setQuantity] = useState(1); // Initial quantity
//   const [price, setPrice] = useState(100); // Initial price per unit
//   const unitPrice = 100; // Price per unit

//   // Increment function
//   const increment = () => {
//     setQuantity(prevQuantity => prevQuantity + 1);
//     setPrice(prevPrice => Number(prevPrice) + unitPrice);
//   };

//   // Decrement function
//   const decrement = () => {
//     if (quantity > 1) { // Ensure quantity doesn't go below 1
//       setQuantity(prevQuantity => prevQuantity - 1);
//       setPrice(prevPrice => Number(prevPrice) - unitPrice);
//     }
//   };

//   return (
//     <div className="d-flex align-items-center">
//       <input className='form-control text-center me-3' type="button" value='-' style={{ maxWidth: '3rem' }} onClick={decrement} />
//       <input
//         className="form-control text-center me-3"
//         id="inputQuantity"
//         type="button"
//         value={quantity}
//         readOnly
//         style={{ maxWidth: '3rem' }}
//       />
//       <input className='form-control text-center me-3' type="button" value='+' style={{ maxWidth: '3rem' }} onClick={increment} />
      
//       {/* Display the price */}
//       <div className="ms-3">
//         <strong>Price: ${price.toFixed(2)}</strong>
//       </div>
//     </div>
//   );
// };

// export default QuantityPriceControl;

// import React, { useState } from 'react';

// const ProductComponent = () => {
//   const [quantity, setQuantity] = useState(0);
//   const [price, setPrice] = useState(0);
//   const unitPrice = 50; // Example unit price

//   const incrementQuantity = () => {
//     setQuantity(prevQuantity => {
//       const newQuantity = prevQuantity + 1;
//       setPrice(newQuantity * unitPrice); // Update price based on the new quantity
//       return newQuantity;
//     });
//   };

//   const decrementQuantity = () => {
//     setQuantity(prevQuantity => {
//       const newQuantity = prevQuantity > 0 ? prevQuantity - 1 : 0;
//       setPrice(newQuantity * unitPrice); // Update price based on the new quantity
//       return newQuantity;
//     });
//   };

//   return (
//     <div>
//       <h1>Product Quantity</h1>
//       <div>
//         <button onClick={decrementQuantity}>-</button>
//         <span>{quantity}</span>
//         <button onClick={incrementQuantity}>+</button>
//       </div>
//       <h2>Total Price: ${price}</h2>
//     </div>
//   );
// };

// export default ProductComponent;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';

const Cart = () => {
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
 

  // Check if the user is logged in, if not, redirect to login page
  useEffect(() => {

    const isLoggedIn = localStorage.getItem('username'); // Or any flag/token you're using
    if (!isLoggedIn) {
      // If not logged in, redirect to login page
      navigate('/login');
    } else {
      // If logged in, fetch the cart data
      axios.get('http://localhost:8000/getcarts')
        .then(result => {
          setData(result.data);
         
          console.log(result);
        })
        .catch(err => console.log(err));
    }
  }, []);
  const handleDelete = (id) => {
    alert('hii');
    axios.delete(`http://localhost:8000/getcartsdelete/${id}`)
      .then(result => {
        console.log(result);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  // Calculate total price whenever data changes
  useEffect(() => {
    const total = data.reduce((acc, item) => acc + (item.totalPrice || 0) * (item.quantity || 1), 0);
    setTotalPrice(total);
    console.log(total);
  }, [data]);

  return (
    <>
      <Navbar />
      <section className="h-100">
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0">Shopping Cart</h3>
              </div>
              <div className="card rounded-3 mb-4">
                <div className="card-body p-4">
                  {data.length > 0 ? (
                    <div className="row d-flex justify-content-between align-items-center">
                      {data.map((item) => (
                        <div className="row" key={item._id}>
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img src={item.image} className="img-fluid rounded-3" alt={item.title} />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <p className="lead fw-normal mb-2">{item.title}</p>
                            <p><span className="text-muted">Size: {item.size}</span></p>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <h5 className="mb-0">{item.category}</h5>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h5 className="mb-0">${item.totalPrice}</h5>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <i className="fas fa-trash fa-lg text-danger" onClick={() => handleDelete(item._id)} />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center">
                      <p>Your cart is empty</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="card mb-5">
                <div className="card-body p-4">
                  <div className="float-end">
                    <p className="mb-0 me-5 d-flex align-items-center">
                      <span className="small text-muted me-2 fw-bold">Order total:</span>
                      <span className="lead fw-bold">${totalPrice}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;

