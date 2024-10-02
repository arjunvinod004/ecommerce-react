import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
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
  const [size,setSize]=useState('')
  const[image,setimage]=useState('')
  const[image1,setimage1]=useState('')
  const [specification,setspecification]=useState('')
  const [description,setDescription]=useState('');
const [array,setArray]=useState([])
const [sleeve,setSleeve]=useState('')

const [title,setTitle]=useState('');
const [price,setPrice]=useState(0);
const [category,setCategory]=useState('')
const [totalPrice,setTotalPrice]=useState(0)

console.log(totalprice);

const navigate=useNavigate()

console.log(name);
console.log(address);
console.log(phonenumber);

// useEffect(() => {
//   const storedArray = localStorage.setItem('myData');
//   if (storedArray) {
//     setData(JSON.parse(storedArray));
//   }
// }, []);

const datas=localStorage.getItem('data')
console.log(datas);
console.log(title);
console.log(image);
console.log(totalPrice);







// data.forEach((product) => {
//   const { title, price, totalPrice,sleeve,image } = product;
//   console.log(`Title: ${title}, Price: ${price}, Total Price: ${totalPrice}, sleeve:${sleeve}, image:${image}`);

// });




console.log(id);
// const price= data.map((item,index)=>{
//   item.totalPrice
// })
useEffect(() => {
  // Retrieve the product data from localStorage
  const storedData = localStorage.getItem('data')|| [];
  console.log(storedData);

  if (storedData) {
    // Parse the stored data (expected to be an array of objects)
    const dataArray = JSON.parse(storedData);
    setData(dataArray)

    // Initialize arrays to hold the extracted values
    const tempPrices = [];
    const tempImages = [];
    const tempTitles = [];

    // Iterate over the array to extract TotalPrice, image, and title for each product
    dataArray.forEach((product) => {
      const { totalPrice, image, title } = product;

      // Push the values into respective arrays
      tempPrices.push(totalPrice || 'no price');
      tempImages.push(image || 'No image');
      tempTitles.push(title || 'No title');
    });

    // Set the state with the populated arrays
    setTotalPrice(tempPrices);
    setimage(tempImages);
    setTitle(tempTitles);
  }
//   if (storedData) {
//     // Parse the data and set it in state
//     const parsedData = JSON.parse(storedData);
//     setData(parsedData);
//     const { TotalPrice, slleve, image, title } = parsedData;
// console.log(parsedData);

//     // Set the data to state variables
    
//     // const dataObject = JSON.parse(storedData);
//     // setTotalPrice(dataObject.TotalPrice);
//     // setSleeve(dataObject.slleve);
//     // setimage(dataObject.image);
//     // setTitle(dataObject.title);
//     // const totalPrice = parsedData.reduce((sum, item) => {
//     //   // Assuming each item has a 'price' and 'quantity' field to calculate totalPrice
//     //   return sum + (item.totalPrice || (item.price * item.quantity)); // Fallback if `totalPrice` is not directly available
//     // }, 0)

//   }
}, []);



// useEffect(() => {

//   // const isLoggedIn = localStorage.getItem('username'); // Or any flag/token you're using
//   // if (!isLoggedIn) {
//     // If not logged in, redirect to login page
//     // navigate('/login');
//   // } else {
//     // If logged in, fetch the cart data
//     axios.get('http://localhost:8000/getcarts')
//       .then(result => {
//         setData(result.data);
//         setCartCount(result.data.length);
//         console.log(result);
//         // localStorage.setItem()
//       })
//       .catch(err => console.log(err));
//   // }
// }, []);

const usersname=localStorage.getItem('username')
console.log(usersname);

    const handledelete=(idToDelete)=>{
alert(idToDelete)
      const updatedItems = data.filter(item => item._id !== idToDelete); // Filter out the item
    setData(updatedItems); // Update state with the filtered array
    alert(updatedItems)
    localStorage.setItem('data', JSON.stringify(updatedItems)); // Update localStorage
      // alert('hii')
      // alert(id)
      // axios.delete('http://localhost:8000/getcartsdelete/'+id)
      // alert(`deleted ${id}`)
      // .then(result=>{
      //   alert('deleted')
      //   console.log(result)
      //   window.location.reload()
      // })
      // .catch(err=>console.log(err))
      }
      
      useEffect(()=>{
        const total = data.reduce((sum, item) => sum + item.totalPrice, 0);
        setTotalprice(total);
      })

      // useEffect(() => {
      //   const total = data.reduce((acc, item) => acc + (item.totalPrice || 0) * (item.quantity || 1), 0);
      //  setTotalprice(total);
      //   console.log(total);
        
      // }, [data,totalprice]);

const handlecheck=()=>{
const name= localStorage.getItem('username')
if(!name){
  navigate('/login')
}else{
 
  // alert('hii')
  // alert(title)
  // alert(image)

  
    axios.post('http://localhost:8000/getcart',{ totalPrice,image,title,usersname})
    // alert('api called')
    .then(result=>{
      console.log('Data sent successfully:', result.data);
      // alert(result.data.message)
      // console.log(result.data.message)
      // console.log(title);
    })
    navigate('/checkout')
        axios.get('http://localhost:8000/getcarts')
      .then(result => {
        console.log('Data sent successfully:', result.data);
        setData(result.data);
        setCartCount(result.data.length);
        console.log(result);
      })
      .catch(error=>{
        console.error('Error:', error.response ? error.response.data : error.message);
      })
}
}


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
                  <h5 className="mb-0">{item.sleeve}</h5>
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
            <button type='button'   class="btn btn-warning" onClick={handlecheck} >Proceed to Pay</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




{/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">checkout</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="row">
        <div class="col-4"></div>
      
        <div class="col-lg-12">
            
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
                   

                   
                    <button class="btn btn-primary m-auto" >  submit</button>
                </form>
            </div>
        </div>


        
    </div>
      </div>
      
    </div>
  </div>
</div> */}






</>


  )
}

export default Cart