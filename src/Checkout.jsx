import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import axios from 'axios'
import Swal from 'sweetalert2'

function Checkout() {
    const data= localStorage.getItem('data')
    const [checkout,setCheckout]=useState([])
    const [totalPrice,setTotalPrice]=useState(0)
    const [name,setName]=useState('')
    const [address,setAddress]=useState('')
    const [phonenumber,setPhonenumber]=useState('')
    const[image,setimage]=useState('')
    const [title,setTitle]=useState('');
    console.log(name);
    console.log(address);
    console.log(phonenumber);
    
    
    useEffect(()=>{
        if(data){
            const dataarray=JSON.parse(data)
            setCheckout(dataarray)
            const tempPrices = [];
            const tempImages = [];
            const tempTitles = [];
            dataarray.forEach((product) => {
                const { totalPrice, image, title } = product;
                tempPrices.push(totalPrice || 'no price');
                tempImages.push(image || 'No image');
                tempTitles.push(title || 'No title');
          console.log(product);
          
                // Push the values into respective arrays
             
              });
              setTotalPrice(tempPrices);
    setimage(tempImages);
    setTitle(tempTitles);
        }
    },[])

    useEffect(()=>{
        const total = checkout.reduce((sum, item) => sum + item.totalPrice, 0);
        setTotalPrice(total);
      })

      const handleorder=()=>{
        axios.post('http://localhost:8000/orders',{name,address,phonenumber,totalPrice,title})
        .then((res)=>console.log(res.data),
    Swal.fire({
title:'ordered succesfully',
text:`you have ordered ${title}`,
icon:'success'

    })
        )
        .catch((err)=>console.log(err)
        )
      }

    
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
                        <input class="form-control"value={name} type="text" onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="">Address</label>
                        <input class="form-control" value={address} type="text" onChange={(e)=>setAddress(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="">Phone No</label>
                        <input class="form-control" value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)} type="number"/>
                    </div>

                    <div class="mb-3">
                        <label class="form-label" for="">total price</label>
                        <input class="form-control" value={totalPrice} readOnly type="number"/>
                    </div>
                    {/* <p>{totalPrice}</p> */}
                    {/* <p>{title}</p> */}
                    <button class="btn btn-primary btn-sm w-50 m-auto" onClick={handleorder}>order</button>
                </form>
            </div>
        </div>


        
    </div>
    </div>
  )
}

export default Checkout