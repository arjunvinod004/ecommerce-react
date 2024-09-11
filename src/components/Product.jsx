import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect ,useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios'
import Slider from 'react-slick'



function Product() {
    const [data,setData]=useState(null)
    const {id}=useParams()
    const [loading, setLoading] = useState(true); // To track loading state
    const [quanity,setquanity ]=useState(1)
  const [title,setTitle]=useState('');
  const [price,setPrice]=useState('');
  const [category,setCategory]=useState('')
  const [code,setCode]=useState('')
  const [size,setSize]=useState('')
  const[image,setimage]=useState('')
  const[image1,setimage1]=useState('')
  const [specification,setspecification]=useState('')
  const [description,setDescription]=useState('');
  const [message,setMessage]=useState('')
const navigate=useNavigate()
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  autoplay: true,
  adaptiveHeight: true,
    cssEase: "linear"
};
const unitprice= price
console.log(unitprice);

const decrement=()=>{
  if(quanity>0){
    setquanity(prevQuantity => prevQuantity - 1)
    setPrice(prevPrice =>Number(prevPrice) - unitprice);
  }
}
console.log(id);
console.log(price);

const increment=()=>{
  
    setquanity(prevQuantity => prevQuantity + 1)
    setPrice(prevPrice =>Number (prevPrice) + unitprice);
  
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
  axios.post('http://localhost:8000/getcart',{title,price,category,image,description,id})
  .then(result=>{
    setMessage(result.data.message)
    alert(result.data.message)
    console.log(result.data.message)
    console.log(title);
   
    
  })
  .catch(err=>{console.log(err)
  })
}

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
                            <span style={{fontWeight:'bold'}}>price: ₹{price}</span>
                        </div>
                        <p class="lead fw-bolder"> Size: {size}</p>
                        <p class="lead fw-bolder"> description: {description}</p>
                        <p class="lead fw-bolder"> specification: {specification}</p>
                        <p class="lead fw-bolder"> code: {code}</p>
                        <div class="d-flex mt-4">
                        <input className='form-control text-center me-3 ' type="button" value='-' style={{ maxWidth: '3rem' }} onClick={decrement} />
                    <input
                      className="form-control text-center me-3"
                      id="inputQuantity"
                      type="button"
                      value={quanity} // Corrected spelling here
                      readOnly
                      style={{ maxWidth: '3rem' }} />
                    <input className='form-control text-center me-3 ' type="button" value='+' style={{ maxWidth: '3rem' }} onClick={increment} />

                          {/* <Link to={`/cart/${id}`}> */}
                          <button type='submit' onClick={handlesubmit}  class="btn btn-outline-dark flex-shrink-0" >
                            <i class="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>

                          
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
    </div>
  )
}

export default Product
