import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
function Cart() {
  const [data,setData]=useState([])
  const {id}=useParams()
  const [loading, setLoading] = useState(true); // To track loading state
 
const [title,setTitle]=useState('');
const [price,setPrice]=useState('');
const [category,setCategory]=useState('')
const[image,setimage]=useState('')
const [description,setDescription]=useState('');

  const [quanity,setquanity ]=useState(0)
  const decrement=()=>{
    if(quanity>0){
      setquanity(quanity-1)
      setPrice(prevPrice => (prevPrice > 0 ? prevPrice - 1 : 0))
    }
  }
  
  const increment=()=>{
      setquanity(quanity+1)
      setPrice(prevPrice => prevPrice + 1);
    
  }
  
  console.log(quanity);
  
  const handleInputChange = (e) => {
    const value = e.target.value;
    // Ensure the value is a number and not empty
    if (!isNaN(value) && value.trim() !== '') {
    setquanity(Number(value));
    } else {
      // Handle cases where the value is invalid (e.g., set to 0 or clear input)
      setquanity(0);
    }
  };




console.log(id);

  useEffect(()=>{
    axios.get('http://localhost:8000/getcarts')
    .then(result=>{
      setData(result.data)
      console.log(result)
    
    
    })
    },[])

  
  return (
  <>
  <Navbar/>
<section className="h-100">
  <div className="container h-100 py-5">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-10">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-normal mb-0">Shopping Cart</h3>
          <div>
            <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i className="fas fa-angle-down mt-1" /></a></p>
          </div>
        </div>
        <div className="card rounded-3 mb-4">
          <div className="card-body p-4">
            <div className="row d-flex justify-content-between align-items-center">
              {data.map((item,index)=>(
              <><div className="col-md-2 col-lg-2 col-xl-2">
                  <img src={item.image} className="img-fluid rounded-3" alt="Cotton T-shrt" />
                </div><div className="col-md-3 col-lg-3 col-xl-3">
                    <p className="lead fw-normal mb-2">{item.title}</p>
                    <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p>
                  </div><div className="col-md-3 col-lg-3 col-xl-2 d-flex">

                    <input className='form-control text-center me-3 ' type="button" value='-' style={{ maxWidth: '3rem' }} onClick={decrement} />
                    <input
                      className="form-control text-center me-3"
                      id="inputQuantity"
                      type="button"
                      value={quanity} // Corrected spelling here
                      readOnly
                      style={{ maxWidth: '3rem' }} />
                    <input className='form-control text-center me-3 ' type="button" value='+' style={{ maxWidth: '3rem' }} onClick={increment} />
                    {/* <button class="btn btn-outline-dark flex-shrink-0" type="button">
    <i class="bi-cart-fill me-1"></i>
        Add to cart
    </button> */}

                  </div><div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h5 className="mb-0">{item.price}</h5>
                  </div><div className="col-md-1 col-lg-1 col-xl-1 text-end">
                    <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg" /></a>
                  </div></>
              ))}

            </div>
          </div>
        </div>
      
        <div className="card">
          <div className="card-body">
            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</>


  )
}

export default Cart