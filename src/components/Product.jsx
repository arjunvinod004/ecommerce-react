import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect ,useState } from 'react'
import { Link } from 'react-router-dom'
function Product() {
    const [data,setData]=useState(null)
    const {id}=useParams()
    const [loading, setLoading] = useState(true); // To track loading state
    // const [filter,setFilter]=useState(data)
    // const [loading,setLoading]=useState(false)
    const [filtereddata,setFilteredData]=useState([])
    const [category,setCategory]=useState('all')
    useEffect(() => {
        // Fetch data from the API
        fetch(`https://fakestoreapi.com/products/${id}`)
          .then(response => response.json())
          .then(data => {
            console.log('Fetched data:', data); // Debug log
          setData(data);
          setLoading(false);
            // setFilteredData(data);
          })
          .catch(error => console.error('Error fetching data:', error));
      }, [id]);

      if (loading) {
        return <p>Loading...</p>;
      }
    
      // If product is still null after loading, return an error message
      if (!data) {
        return <p>Product not found.</p>;
      }

  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-12">
                <h1 className='fw-bolder text-center mt-3'>latest products</h1>

                <div classname="buttons text-center p-3"   >
  
 

  <div className="container">

            <div className="row col-md-6">
           
              {/* {loading?<Loading/>:<Getproducts/>} */}
                
            
                <div className="col-md-3 " >
                  <div className="card h-100 text-center p-3">
                   
                      <img src={data.image} className="card-img-top" alt={data.title} height="250px" />
                    
                    <div className="card-body">
                      <h5 className="card-title">{data.category}</h5>
                      <p className="card-text">{data.title.substring(0, 12)}</p>
                      <p className="card-text">₹{data.price}</p>
                      <Link to={`/products/${data.id}`} className="btn btn-primary">Buy Now</Link>
                    </div>
                  </div>
                </div>
            
               
            </div>
        </div>
</div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Product
