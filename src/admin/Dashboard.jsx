import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Resizer from "react-image-file-resizer";

function Dashboard({ cartCount }) {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [quanity,setQuanity]=useState('');
  const [price,setPrice]=useState('');
  const [image,setImage]=useState("")
 const[specification,setspecification]=useState("")
 const [code,setcode]=useState("")
 const[category,setcategory]=useState("")
 const [size,setsize]=useState("")
   const [orders, setOrders] = useState([]);
  const [products,setproducts]=useState([])
 console.log(image);
 console.log(products);
 console.log(title);
 console.log(description);
 console.log(price);
 console.log(quanity);
 
 
 
 
 
  
  console.log(orders);

  useEffect(() => {
    axios
      .get("http://localhost:8000/getorders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleimagechange=(e)=>{

const data= new FileReader()
if (e.target.files[0]) {
  Resizer.imageFileResizer(
    e.target.files[0],
    200, // width
    200, // height
    "JPEG", // output format (JPEG, PNG, etc.)
    70, // quality (0-100)
    0, // rotation
    (uri) => {
      setImage(uri); // set base64 string after resize
    },
    "base64" // output type
  );
}

data.readAsDataURL(e.target.files[0])
data.onload=()=>{
console.log(data.result);
setImage(data.result)

}
  }
const handlesubmit=()=>{
  axios.post('http://localhost:8000/addproducts',{title,description,quanity,price,image})
  .then(res=>{
    console.log(res.data);
    
  })
  .catch(err=>console.log(err)
  )
}

  // const username=localStorage.getItem("username")

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary py-4">
        <div class="container">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <a class="navbar-brand"> Deals of Day</a>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <h5>welcome to dashboard</h5>
            </ul>
            <div classname="buttons" style={{ display: "flex", gap: "10px" }}>
              <Link to={"/cart"} style={{ display: "contents" }}>
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  style={{ position: "relative" }}
                >
                  Logout
                </button>
              </Link>

              {/* {username && (<span  className='mx-5 mt-2'>
        hello {username}
      </span>)}
       */}
            </div>
          </div>
        </div>
      </nav>
    

<div class="d-flex align-items-start mt-3 separation ">
  <div class="nav flex-column nav-pills me-3 p-2" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Products</button>
    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">order</button>
    {/* <button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" disabled>Disabled</button>
    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
    <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button> */}
  </div>
  <div class="tab-content mx-auto" id="v-pills-tabContent">
    <div class="tab-pane fade show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
    <body>
              <div class="row">
                <div class="col-4"></div>
             
                <div class="col-lg-12 ">
               
                  <div class="container-fluid border mt-0 p-5">
                    <h1 class="text-center text-primary mb-2">Products</h1>
                    <form action="">
                      <div class="mb-3">
                        <label class="form-label" for="">
                          Name
                        </label>
                        <input class="form-control" type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                      </div>
                      <div class="mb-3">
                        <label class="form-label" for="">
                          Description
                        </label>
                        <input class="form-control" type="text" value={description} onChange={(e)=>setdescription(e.target.value)} />
                      </div>

                      <div class="mb-3">
                        <label class="form-label" for="">
                          specification
                        </label>
                        <input class="form-control" type="text" value={specification} onChange={(e)=>setspecification(e.target.value)} />
                      </div>

                      <div class="mb-3">
                        <label class="form-label" for="">
                          code
                        </label>
                        <input class="form-control" type="text" value={code} onChange={(e)=>setcode(e.target.value)} />
                      </div>

                      <div class="mb-3">
                        <label class="form-label" for="">
                          category
                        </label>
                        <input class="form-control" type="text" value={category} onChange={(e)=>setcategory(e.target.value)} />
                      </div>

                      <div class="mb-3">
                        <label class="form-label" for="">
                          size
                        </label>
                        <input class="form-control" type="text" value={size} onChange={(e)=>setsize(e.target.value)} />
                      </div>

                      <div class="mb-3">
                        <label class="form-label" for="">
                          Quanity
                        </label>
                        <input class="form-control" type="number" value={quanity}onChange={(e)=>setQuanity(e.target.value)} />
                      </div>
                      <div class="mb-3">
                        <label class="form-label" for="">
                          Price
                        </label>
                        <input value={price} class="form-control" type="number" onChange={(e)=>setPrice(e.target.value)} />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="">Image</label>
                        <input onChange={handleimagechange} type="file" className="form-control" />
                      </div>
                      {image==""||image==null?"":<img width={'200px'} height={'200px'} src={image}/>}

                      <button type="submit" class="btn btn-primary" onClick={handlesubmit}>submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </body>
    </div>
    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
    <div className="">
    <div className="table-responsive">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Phone No</th>
            <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item) => (
            <tr key={item._id}>
              <th>{item._id}</th>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.phonenumber}</td>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
    </div>
    {/* <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">...</div> */}
  </div>
</div>
    </div>
  );
}

export default Dashboard;
