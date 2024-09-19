import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
function Cart() {
  const [data,setData]=useState([])
  const {id}=useParams()
  const [cartCount, setCartCount] = useState(0); // State to track the number of items in the cart
const [name,setName]=useState('');
const [address,setAddress]=useState('')
const [phonenumber,setPhonenumber]=useState('')
const [orders,setorders]=useState([])
  const [totalprice,setTotalprice]=useState(0)

console.log(totalprice);


console.log(name);
console.log(address);
console.log(phonenumber);





console.log(id);

  useEffect(()=>{
    axios.get('http://localhost:8000/getcarts')
    .then(result=>{
      setData(result.data)
      setCartCount(result.data.length);
      console.log(result)
    
    
    })
    },[])


    const handledelete=(id)=>{
      
      axios.delete('http://localhost:8000/getcartsdelete/'+id)
      .then(result=>{console.log(result)
        window.location.reload()
      })
      .catch(err=>console.log(err))
      }
      

      useEffect(() => {
        const total = data.reduce((acc, item) => acc + (item.totalPrice || 0) * (item.quantity || 1), 0);
       setTotalprice(total);
        console.log(total);
        
      }, [data,totalprice]);


      const handleorder=()=>{
        axios.post('http://localhost:8000/orders',{name,address,phonenumber,totalprice})
        .then((res)=>{setorders(res.data)
          console.log(res.data);
          
        }
        )
      }
  
  return (
  <>
  <Navbar  cartCount={cartCount}/>
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
                  </div>
                  <div className="col-md-1 col-lg-1 col-xl-1 text-end">

                    <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg" onClick={(e)=>handledelete(item._id)} /></a>
                  </div>
                  
                  </>

                  
              ))
              
              }
  
            </div>
              ):(
                <div class="text-center">
               <p>cart is empty</p>
              </div>

              )}
          </div>
        </div>
        <div class="card mb-5">
            <div class="card-body p-4">

              <div class="float-end">
                <p class="mb-0 me-5 d-flex align-items-center">
                  <span class="small text-muted me-2 fw-bold">Order total:</span> <span class="lead fw-bold">{totalprice}</span>
                </p>
              </div>

            </div>
          </div>
        <div className="card">
          <div className="card-body text-center">
            <button type="button"  class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Proceed to Pay</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">checkout</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="row">
        <div class="col-4"></div>
        {/* <!-- first coloumn --> */}
        <div class="col-lg-12">
            {/* <!-- middle --> */}
            <div class="container border mt-2 p-2 row">
                <h1 class="text-center text-seconadry mb-1">Order</h1>
                <form action="" onSubmit={handleorder}>
                    <div class="mb-3">
                        <label class="form-label" for="">Name</label>
                        <input class="form-control" value={name} onChange={(e)=>setName(e.target.value)} type="text"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="">Address</label>
                        <input class="form-control" value={address} onChange={(e)=>setAddress(e.target.value)}  type="text"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="">phone Number</label>
                        <input class="form-control" type="number" value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)}/>
                    </div>

                    <span>{totalprice}</span>
                   
{/* <img src={selectimg} style={{width:'250px',height:'200px'}} alt="" /> */}
                   
                    <button class="btn btn-primary m-auto" >  submit</button>
                </form>
            </div>
        </div>


        
    </div>
      </div>
      
    </div>
  </div>
</div>






</>


  )
}

export default Cart