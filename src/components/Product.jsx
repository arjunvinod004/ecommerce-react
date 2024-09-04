import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect ,useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios'
function Product() {
    const [data,setData]=useState(null)
    const {id}=useParams()
    const [loading, setLoading] = useState(true); // To track loading state
    const [quanity,setquanity ]=useState(0)
  const [title,setTitle]=useState('');
  const [price,setPrice]=useState('');
  const [category,setCategory]=useState('')
  const[image,setimage]=useState('')
  const [description,setDescription]=useState('');

const decrement=()=>{
  if(quanity>0){
    setquanity(quanity-1)
  }
}

const increment=()=>{
  
    setquanity(quanity+1)
  
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
setDescription(result.data.description)
})
})

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
      
        <div className="row mb-4">
            <div className="col-12 ">
                <h1 className='fw-bolder text-center mt-3 '>Latest products</h1>
                <section class="py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="row gx-4 gx-lg-5 align-items-center">
                    <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src={image} alt="..." /></div>
                    <div class="col-md-6">
                        {/* <div class="small mb-1">SKU: BST-498</div> */}
                        <h1 class="display-5 fw-bolder">{title}</h1>
                        <h1 class="display-5 fw-bolder">{category}</h1>
                        <div class="fs-5 mb-5">
                          <br />
                            <span style={{fontWeight:'bold'}}>₹{price}</span>
                        </div>
                        <p class="lead">{description}</p>
                        <div class="d-flex">
                        <input className='form-control text-center me-3 ' type="button" value='-' style={{maxWidth:'3rem'}} onClick={decrement}/>
                            <input class="form-control text-center me-3" id="inputQuantity" type="" value={quanity} style={{maxWidth:'3rem'}}  />
                            <input className='form-control text-center me-3 ' type="button" value='+' style={{maxWidth:'3rem'}} onClick={increment} />
                            <button class="btn btn-outline-dark flex-shrink-0" type="button">
                            <i class="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>
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
      </div>
    </div>
  )
}

export default Product
