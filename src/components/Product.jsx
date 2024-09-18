import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect ,useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Product() {
    const [data,setData]=useState(null)
    const {id}=useParams()
    const [loading, setLoading] = useState(true); // To track loading state
    const [quanity,setquanity ]=useState(1)
  const [title,setTitle]=useState('');
  const [price,setPrice]=useState(0);
  const [category,setCategory]=useState('')
  const [code,setCode]=useState('')
  const [size,setSize]=useState('')
  const[image,setimage]=useState('')
  const[image1,setimage1]=useState('')
  const [specification,setspecification]=useState('')
  const [description,setDescription]=useState('');
  const [message,setMessage]=useState('');
  const [showPrice, setShowPrice] = useState(false);

  const [related,setRelated]=useState([])

const navigate=useNavigate()

const totalPrice = price * quanity;
console.log(price);
console.log(totalPrice);
console.log(related);

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};


// const unitprice= 100
// console.log(unitprice);

const decrement=()=>{
  if(quanity>1){
    setquanity(prevQuantity => prevQuantity - 1)
 
  }
}
console.log(id);
console.log(price);

const increment=()=>{
    setquanity(prevQuantity => prevQuantity + 1)
    setShowPrice(true)
  
  console.log(price);
 
    
  
}




const handleinputchange=(e)=>{
  const value= e.target.value;
  if(!NaN(value)){
    setquanity(Number(value))
  }
}

console.log(data);


useEffect(()=>{
axios.get('http://localhost:8000/getmainfunctions/'+id)
.then(result=>{console.log(result)
setTitle(result.data.title);
setPrice(result.data.price);
setCategory(result.data.category);
setimage(result.data.image)
setimage1(result.data.image1)
setDescription(result.data.description)
setCode(result.data.code)
setSize(result.data.size)
setspecification(result.data.Specification)
})
})

const handlesubmit=(e)=>{
  e.preventDefault();
  alert('hii')
  axios.post('http://localhost:8000/getcart',{title,price,totalPrice,category,image,description,id,size})
  .then(result=>{
    setMessage(result.data.message)
    alert(result.data.message)
    console.log(result.data.message)
    console.log(title);
   
   
  })
  .catch(err=>{console.log(err)
  })
}


useEffect(() => {
  // Update totalPrice when quantity or unitPrice changes
  setShowPrice(price * quanity);
}, [quanity, price]);

useEffect(() => {
  // Fetch data from the API
  axios.get('http://localhost:8000/getrelatedproducts')
    .then(data => {
      console.log('Fetched data:', data); // Debug log
    setRelated(data.data);
      // setFilteredData(data.data);
    })
    .catch(error => console.error('Error fetching data:', error));
}, []);


// const handlesubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const result = await axios.post('http://localhost:8000/getcart', {
//       title,
//       price,
//       category,
//       image,
//       description,
//       id,
//     });
//     console.log('API call succeeded');
//     console.log(result.data.message);
//     alert(result.data.message);
//   } catch (err) {
//     console.log('Error:', err);
//     alert('Failed to add item to cart');
//   }
// };




    // const [filter,setFilter]=useState(data)
    // const [loading,setLoading]=useState(false)
    // const [filtereddata,setFilteredData]=useState([])
    // const [category,setCategory]=useState('all')

    // useEffect(() => {
    //     // Fetch data from the API
    //     axios.get(`http://localhost:8000/getmainfunction/`+id)
    //     // fetch(`https://fakestoreapi.com/products/${id}`)
    //     //   .then(response => response.json())
    //       .then(data => {
    //         console.log('Fetched data:', data); // Debug log
    //       setData(data.data);

    //       })
    //       .catch(error => console.error('Error fetching data:', error));
    //   }, [id]);

    //   if (loading) {
    //     return <p>Loading...</p>;
    //   }
    
    //   // If product is still null after loading, return an error message
    //   if (!data) {
    //     return <p>Product not found.</p>;
    //   }

  return (
    <div>
        <Navbar/>
      <div className="container">
      <form action="" >
        <div className="row mb-4">
            <div className="col-12 ">
                <h1 className='fw-bolder text-center mt-3 '> products</h1>
                <section class="py-5">
            <div class="container px-4 px-lg-5 my-5">
{message && (  <div class="alert alert-success" role="alert">
{message}
</div>)}

                <div class="row gx-4 gx-lg-5 align-items-center">
                    <div class="col-md-6">
                    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image1} class="d-block w-100" alt="..."/>
    </div>
 
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                      {/* <img class="card-img-top mb-5 mb-md-0" src={image} alt="..." /> */}
                      
                      </div>

                    <div class="col-md-6">


                        {/* <div class="small mb-1">SKU: BST-498</div> */}
                        <h1 class="display-5 fw-bolder">{title}</h1>
                        <h1 class="lead fw-bolder "> category: {category}</h1>
                        <div class="fs-5 mb-5">
                          <br />
                          {showPrice && ( <span style={{fontWeight:'bold'}}>price: ₹{totalPrice}</span> )}
                          {/* <span style={{fontWeight:'bold'}}>price: ₹{price}</span> */}
                            {/* <span style={{fontWeight:'bold'}}>price: ₹{price}</span> */}
                        </div>
                        <p class="lead fw-bolder"> Size: {size}</p>
                        <p class="lead fw-bolder"> description: {description}</p>
                        <p class="lead fw-bolder"> specification: {specification}</p>
                        <p class="lead fw-bolder"> code: {code}</p>
                        {/* <p class="lead fw-bolder"> code: {totalPrice}</p> */}

                        <div class="d-flex mt-4">
                        <input className='form-control text-center me-3 ' type="button" value='-' style={{ maxWidth: '3rem' }} onClick={decrement} />
                    <input
                      className="form-control text-center me-3"
                      id="inputQuantity"
                      type="button"
                      value={quanity} // Corrected spelling here
                      readOnly
                      style={{ maxWidth: '3rem' }} />
                    <input className='form-control text-center me-3 ' type="button" value='+'  style={{ maxWidth: '3rem' }} onClick={increment} />

                          {/* <Link to={`/cart/${id}`}> */}
                          <button type='submit' onClick={handlesubmit}  class="btn btn-outline-dark flex-shrink-0" >
                            <i class="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>

                        <Link to={'/login'}> <a href="#" className="btn btn-warning mx-2">Checkout</a></Link>   

                          
                            {/* </Link>   */}
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>


        

                {/* <div classname="buttons text-center p-3"   >
  
 

  <div className="container">

            <div className="row ">
           

                
            
                <div className="col-md-6 " >
                  <div className="card h-100 text-center p-3">
                   
                      <img src={data.image} className="card-img-top" alt={data.title} height="250px" />
                    
                    <div className="card-body">
                      <h5 className="card-title">{data.category}</h5>
                      <p className="card-text">{data.title.substring(0, 12)}</p>
                      <p className="card-text">₹{data.price}</p>
                      <Link to={`/product/${data.id}`} className="btn btn-primary">Buy Now</Link>
                    </div>
                  </div>
                </div>
            
               
            </div>
        </div>
</div> */}

            </div>
        </div>
        </form>


        
      </div>

     

      <div className="slider-container">
      <h5 className='text-center'>Related products</h5>
      <Slider {...settings}>
 
        {related.map((item,index)=>(
  <div class="col-md-3 mb-4 ">
    
    <div class="card h-100 text-center p-3 mx-2">
       
      <img src={item.image} class="card-img-top" alt="..." height="350px"/>
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
                                    <Link to={`/product/${item._id}`}> <a href="#" className="btn btn-primary mx-2">Buy Now</a></Link>

                                  
                                    </div>
                                   
                                </div>
      </div>
      </div>
        ))}
     
       
      </Slider>
    </div>

      {/* <div className="container">
      <div className="row">
        <div className="col-6">
          <h3 className="mb-3">Carousel cards title</h3>
        </div>
        <div className="col-6 text-right">
          <a
            className="btn btn-primary mb-3 mr-1"
            href="#carouselExampleIndicators2"
            role="button"
            data-slide="prev"
          >
            <i className="fa fa-arrow-left" />
          </a>
          <a
            className="btn btn-primary mb-3"
            href="#carouselExampleIndicators2"
            role="button"
            data-slide="next"
          >
            <i className="fa fa-arrow-right" />
          </a>
        </div>
        <div className="col-12">
          <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner ">
                  <div  className={`carousel-item active`}>
                    <div className="row">
                    {related.map((item, index) => (
                        <div className="col-md-4 " key={index}>
                          <div className="card">
                            <img
                              className="img-fluid"
                              alt="Product"
                              src={item.image} // Use the correct property from your data
                            />
                            <div className="card-body">
                              <h4 className="card-title">{item.title}</h4>
                              <p className="card-text">{item.description}</p>
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
    </div> */}


   

      
    </div>
  )
}

export default Product
