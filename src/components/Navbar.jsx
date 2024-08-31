import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary py-4">
    <div class="container">
      <a class="navbar-brand" href="#"> El Toro Shopping </a>
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
          {/* <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> */}
         
        </ul>
      <div classname="buttons" style={{display:'flex',gap:'10px'}}  >
  
      <button type="button" class="btn btn-outline-secondary" > <i className="fa-solid fa-right-to-bracket me-1" /> Login</button>

      <button type="button" class="btn btn-outline-secondary"><i class="fa-solid fa-user me-2"></i> Register</button>
      <button type="button" class="btn btn-outline-secondary"><i class="fa-solid fa-cart-shopping me-2"></i> Cart</button>
 
</div>

      </div>
    </div>
  </nav>
  )
}

export default Navbar
