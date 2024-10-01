import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Dashboard({cartCount}) {
  
  // const username=localStorage.getItem("username")

  return (
    <div>
         <nav class="navbar navbar-expand-lg bg-body-tertiary py-4">
    <div class="container">
     <Link to={'/'} style={{textDecoration:'none'}}><a class="navbar-brand"> Deals of Day</a></Link> 
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
         <h5>welcome to dashboard</h5>        
        </ul>
      <div classname="buttons" style={{display:'flex',gap:'10px'}}  >
  
   
    <Link to={'/cart'} style={{display:'contents'}}> 
     <button type="button" class="btn btn-outline-secondary" style={{position:'relative'}}>
 
      Logout</button></Link>
   


      
{/* {username && (<span  className='mx-5 mt-2'>
        hello {username}
      </span>)}
       */}
 
</div>

      </div>
    </div>
  </nav>
      {/* <div style={{float:'right'}} className='mr-2'>welcome {username}</div> */}
      {/* <div className="text-center mt-3">welcome to dashboard</div> */}
      <div class="d-flex align-items-start p-4 separation">
  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Products</button>
    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Order</button>
    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
    <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
  </div>
  <div class="tab-content mx-auto" id="v-pills-tabContent">
    <div class="tab-pane fade show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
    <body>
    <div class="row">
        <div class="col-4"></div>
        {/* <!-- first coloumn --> */}
        <div class="col-lg-12 ">
            {/* <!-- middle --> */}
            <div class="container-fluid border mt-0 p-5">
                <h1 class="text-center text-primary mb-2">Products</h1>
                <form action="">
                    <div class="mb-3">
                        <label class="form-label" for="">Name</label>
                        <input class="form-control" type="text"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="">Description</label>
                        <input class="form-control" type="password"/>
                    </div>
<div className="mb-3">
  <label htmlFor="">Image</label>
  <input type="file" className="form-control" />
</div>

                    <button class="btn btn-primary">log in</button>
                </form>
            </div>
        </div>


        
    </div>

</body>

    </div>
    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
  </div>
</div>


      


      
    </div>
  );
}

export default Dashboard;
