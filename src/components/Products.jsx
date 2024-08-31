import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom'
function Products() {
    const [data,setData]=useState([])
    // const [filter,setFilter]=useState(data)
    // const [loading,setLoading]=useState(false)
    const [filtereddata,setFilteredData]=useState([])
    const [category,setCategory]=useState('all')
    // let compounded=true
    console.log(data);
    useEffect(() => {
      // Fetch data from the API
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
          console.log('Fetched data:', data); // Debug log
        setData(data);
          setFilteredData(data);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);
//     useEffect(() => {
//       const showproducts=async()=>{
//         setLoading(true)
// const response= await fetch('https://fakestoreapi.com/products');
// if(compounded){
//   setData(await response.clone().json())
//   setFilter(await response.json())
// // setLoading(false)
// setFilteredData(data)
// console.log(filter);

// return()=>{
//   compounded=false
// }

// }
//       }
//       showproducts();
//       // fetch('https://fakestoreapi.com/products')
//       //     .then(response => response.json())
//       //     .then(fetchedData => setData(fetchedData))
//       //     .catch(error => console.error('Error fetching data:', error));
//   }, []);


  useEffect(() => {
    // Filter products based on the selected category
    if (category === 'all') {
      setFilteredData(data);
    } else {
      const filtered = data.filter(product => product.category === category);
      console.log('Filtered products:', filtered); // Debug log
      setFilteredData(filtered);
    }
  }, [category, data]);
  


  // const Loading=()=>{
  //   return(
  //     <><div className='col-md-3'>
  //       <Skeleton height={'350px'} count={5}  /></div>
  //       <div className='col-md-3'>
  //       <Skeleton height={'350px'} /></div>
  //       <div className='col-md-3'>
  //       <Skeleton height={'350px'} /></div>
  //       <div className='col-md-3'>
  //       <Skeleton height={'350px'} /></div></>
  //   )
  // }

  // const Getproducts=()=>{
  //   return(

  //   )
  // }

  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-12">
                <h1 className='fw-bolder text-center mt-3'>latest products</h1>

                <div classname="buttons text-center p-3"   >
  
 

  <div className="container">

            <div className="row">
            <div className="buttons mb-4 text-center">
<button type="button" class="btn btn-outline-dark me-2" onClick={()=>setCategory('all')} >  All</button>

<button type="button" class="btn btn-outline-dark me-2"  onClick={()=>setCategory("men's clothing")} > Men</button>
<button type="button" class="btn btn-outline-dark me-2" onClick={()=>setCategory("women's clothing")}> Women</button>
<button type="button" class="btn btn-outline-dark me-2" onClick={()=>setCategory('jewelery')}> Jewellery</button>
<button type="button" class="btn btn-outline-dark me-2" onClick={()=>setCategory('electronics')}> Electronics</button>
</div>
              {/* {loading?<Loading/>:<Getproducts/>} */}
                
                   { filtereddata.map((item, index) =>(
                        <div className="col-md-3 mb-4" key={index}>
                            <div className="card h-100 text-center p-3">
                              <Link></Link>  <img src={item.image} className="card-img-top" alt="..." height={'250px'} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.category}</h5>
                                    <p className="card-text">{item.title.substring(0,12)}</p>
                                    <p className="card-text"> ₹{item.price}</p>
                                   <Link to={`/products/${item.id}`}> <a href="#" className="btn btn-primary">Buy Now</a></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                
               
            </div>
        </div>
</div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Products
