import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'

function Checkout() {
    const data= localStorage.getItem('data')
    const [checkout,setCheckout]=useState([])
    const [totalPrice,setTotalPrice]=useState(0)
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phonenumber,setPhonenumber]=useState('')
    console.log(data[0].totalPrice);
    useEffect(()=>{
        if(data){
            const dataarray=JSON.parse(data)
            setCheckout(dataarray)
            dataarray.forEach((product) => {
                const { totalPrice, image, title } = product;
          console.log(product);
          
                // Push the values into respective arrays
             
              });
        }
    },[])

    useEffect(()=>{
        const total = checkout.reduce((sum, item) => sum + item.totalPrice, 0);
        setTotalPrice(total);
      })

    
  return (
    
   
    <div>
         <Navbar/>
         <div class="row">
        <div class="col-4"></div>
        {/* <!-- first coloumn --> */}
        <div class="col-lg-4">
            {/* <!-- middle --> */}
            <div class="container-fluid border mt-5 p-5 text-center" style={{background:'#f5f4f4'}}>
                <h1 class="text-center text-primary mb-4">Checkout</h1>
                <form action="">
                    <div class="mb-3">
                        <label class="form-label" for="">Name</label>
                        <input class="form-control" type="text"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="">Address</label>
                        <input class="form-control" type="password"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="">Phone No</label>
                        <input class="form-control" type="password"/>
                    </div>
                    <p>{totalPrice}</p>
                    <button class="btn btn-primary btn-sm w-50 m-auto">order</button>
                </form>
            </div>
        </div>


        
    </div>
    </div>
  )
}

export default Checkout