import React from 'react'

import Navbar from './Navbar'
import Products from './Products'
function Home() {
  return (
    <div className='hero'>
      <Navbar/>
<div class="card bg-dark text-white border-0">
  <img src="https://t4.ftcdn.net/jpg/05/39/99/67/360_F_539996737_T5gJEIEqsGUjMXhrLZt0lDLcrOWsSHlb.jpg" class="card-img" alt="..."/>
  <div class="card-img-overlay d-flex flex-column justify-content-center text-center">
    <h5 class="card-title display-3 fw-bold ">New Season Arrivals</h5>
    <p class="card-text lead fs-2">Check out All these Trends</p>
   
  </div>
</div>
<Products/>

    </div>
    
  )
}

export default Home
