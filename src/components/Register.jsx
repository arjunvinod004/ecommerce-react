import React from 'react'
import { Link } from 'react-router-dom'
function Register() {
  return (
    <body className='bg-black login'>
     <div className="container1">
  <div className="card1">
    <h2>Register</h2>
    <form>
      <input type="text" id="username" name="username" placeholder="Username" required />
      <input type="password" id="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <br />
<div style={{textAlign:'center',}}>
 <Link to={'/login'} style={{textDecoration:'none'}}> <a style={{ color:'white'}}>Already a Customer please Login</a>
 </Link> 
</div>

  </div>
</div>

  </body>
  )
}

export default Register