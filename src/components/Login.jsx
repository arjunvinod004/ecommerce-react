import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <body className='bg-black login'>
     <div className="container1">
  <div className="card1">
    <h2>Login</h2>
    <form>
      <input type="text" id="username" name="username" placeholder="Username" required />
      <input type="password" id="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <br />
<div style={{textAlign:'center',}}>
    <a href="" style={{textDecoration:'none', color:'white'}}>Forgot Password</a>
  <Link to={'/register'}> <a href="" style={{textDecoration:'none', color:'white',float:'right'}}>create a new account</a></Link> 
</div>

  </div>
</div>

  </body>
   
  )
}

export default Login