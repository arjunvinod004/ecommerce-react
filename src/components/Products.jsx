import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useId } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
function Products() {
    const [data,setData]=useState([])
    const id= useId()
    console.log(id);
    
    // const [filter,setFilter]=useState(data)
    // const [loading,setLoading]=useState(false)
    const [filtereddata,setFilteredData]=useState([])
    const [category,setCategory]=useState('all')
    // let compounded=true
    console.log(data);
    useEffect(() => {
      // Fetch data from the API
      axios.get('http://localhost:8000/getmainfunction')
        .then(data => {
          console.log('Fetched data:', data); // Debug log
        setData(data.data);
          // setFilteredData(data.data);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);

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
  

  return (
    <div>
    
      <div className="container">
        <div className="row">
            <div className="col-12">
                <h1 className='fw-bolder text-center mt-3 mb-4
                '>latest products</h1>

                <div classname="buttons text-center p-3"   >
  
 

  <div className="container">

            <div className="row mb-4">
            <div className=" mb-4 text-center">
<button type="button" class="btn btn-outline-dark me-2" onClick={()=>setCategory('all')} >  All</button>

<button type="button" class="btn btn-outline-dark me-2"  onClick={()=>setCategory("shirt")} > Men</button>
<button type="button" class="btn btn-outline-dark me-2" onClick={()=>setCategory("women")}> Women</button>
<button type="button" class="btn btn-outline-dark me-2" onClick={()=>setCategory('ornaments')}> Jewellery</button>
<button type="button" class="btn btn-outline-dark me-2" onClick={()=>setCategory('electronics')}> Electronics</button>
</div>
              {/* {loading?<Loading/>:<Getproducts/>} */}
                
                   { filtereddata.map((item, index) =>(
                        <div className="col-md-3 mb-4" key={index}>
                            <div className="card h-100 text-center p-3">
                              <Link></Link>  <img src={item.image} className="card-img-top" alt="..." height={'250px'} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title.substring(0,9)}</h5>
                                    <p className="card-text">{item.category}</p>
                                    <p className="card-text"> ₹{item.price}</p>
                                    <div className='rounded'>
                                      <span className='circle'>Free Delivery</span>
                                    </div>

                                    <div className='mt-2'>
                                      <span className='rating' style={{color:'#fff'}}>{item.rating}

                                      <img style={{marginLeft:'4px'}} width={'10px'} height={'10px'}  src="https://www.meesho.com/assets/svgicons/star.svg" alt="" />
                                      </span>
                                     
                                    </div>
                                    <div className='mt-2'>
                                    <Link to={`/product/${item._id}`}>
                                     <a href="#" className="btn btn-primary mx-2">Buy Now</a></Link>

                                  
                                    </div>
                                   
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
