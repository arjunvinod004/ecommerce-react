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

  




console.log(id);

  useEffect(()=>{
    axios.get('http://localhost:8000/getcarts')
    .then(result=>{
      setData(result.data)
      console.log(result)
    
    
    })
    },[])


    const handledelete=(id)=>{
      alert('hii')
      axios.delete('http://localhost:8000/getcartsdelete/'+id)
      .then(result=>{console.log(result)
        window.location.reload()
      })
      .catch(err=>console.log(err))
      }
      


  
  return (
  <>
  <Navbar/>
<section className="h-100">
  <div className="container h-100 py-5">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-10">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-normal mb-0">Shopping Cart</h3>
          
        </div>
        <div className="card rounded-3 mb-4">
          <div className="card-body p-4">
            {data.length>0 ?(

          
            <div className="row d-flex justify-content-between align-items-center">
              {data.map((item,index)=>(
              <><div className="col-md-2 col-lg-2 col-xl-2">
                  <img src={item.image} className="img-fluid rounded-3" alt="Cotton T-shrt" />
                </div><div className="col-md-3 col-lg-3 col-xl-3">
                    <p className="lead fw-normal mb-2">{item.title}</p>
                    <p><span className="text-muted">size: {item.size} </span></p>
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-2 d-flex">

                  <h5 className="mb-0">{item.category}</h5>
                    {/* <button class="btn btn-outline-dark flex-shrink-0" type="button">
    <i class="bi-cart-fill me-1"></i>
        Add to cart
    </button> */}

                  </div><div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                 
                    <h5 className="mb-0">{item.totalPrice}</h5>
                  </div><div className="col-md-1 col-lg-1 col-xl-1 text-end">
                    <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg" onClick={(e)=>handledelete(item._id)} /></a>
                  </div></>
              ))
              
              }

            </div>
              ):(
                <div class="text-center">
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--shopping-ecommerce-simple-error-state-pack-user-interface-illustrations-6024626.png" class="rounded" alt="..."/>
              </div>
              )}
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