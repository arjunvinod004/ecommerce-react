import React from 'react'
import { Link } from 'react-router-dom'
function Navbar({ cartCount }) {
  const username=localStorage.getItem("username")
  console.log(cartCount);
  
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary py-4">
    <div class="container">
     <Link to={'/'} style={{textDecoration:'none'}}><a class="navbar-brand"> Deals of Day</a></Link> 
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
           <Link style={{textDecoration:'none'}} to={'/products'}><a class="nav-link" href="#">Products</a></Link> 
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">contact</a>
          </li>         
        </ul>
      <div classname="buttons" style={{display:'flex',gap:'10px'}}  >
  
     <Link to={'/login'} style={{display:'contents'}}><button type="button" class="btn btn-outline-secondary" > <i className="fa-solid fa-right-to-bracket me-1" /> Login</button></Link> 

   <Link to={'/register'}> <button type="button" class="btn btn-outline-secondary"><i class="fa-solid fa-user me-2"></i> Register</button></Link>  
    <Link to={'/cart'} style={{display:'contents'}}> 
     <button type="button" class="btn btn-outline-secondary" style={{position:'relative'}}>
    <span class="cart-item-count">{cartCount}</span>
      <i class="fa-solid fa-cart-shopping me-2"></i> Cart</button></Link>
      {username && (<div class="dropdown">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  {username}
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#"> My Profile</a>
    <a class="dropdown-item" href="#">Order</a>
    <a class="dropdown-item" href="#">Settings</a>
  </div>
</div>)}
      
{/* {username && (<span  className='mx-5 mt-2'>
        hello {username}
      </span>)}
       */}
 
</div>

      </div>
    </div>
  </nav>
  )
}

export default Navbar
