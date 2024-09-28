import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login from './Login';
function Register() {
  const username=useRef();
  const email =useRef();
  const password=useRef();
const navigate=useNavigate()
const [validation,setValidation]=useState('');
const Register=localStorage.getItem("register")
const [login,setLogin]=useState(false)
useEffect(()=>{
  if(Register){
setLogin(true)
  }
})

  const handlesubmit=(e)=>{
    e.preventDefault();
    if(username.current.value,email.current.value,password.current.value){
      console.log(username.current.value);
      console.log(email.current.value);
      console.log(password.current.value);
      localStorage.setItem("username",username.current.value);
      localStorage.setItem("email",email.current.value);
      localStorage.setItem("password",password.current.value);
      localStorage.setItem("register",email.current.value)
     setValidation('registered sucessfully')
     navigate('/login')
     window.location.reload();
    
    }
  }
  return (
    <body className='bg-black login'>
     <div className="container1">
     {validation && (  <div class="alert alert-success" role="alert">
{validation}
</div>)}
     
    
  <div className="card1">
    <h2>Register</h2>
    <form onSubmit={handlesubmit}>
      <input type="text" id="username" name="username" placeholder="Username" ref={username}  />
    
      <input type="email" id="email" name="email" placeholder="email" ref={email} required />
      <input type="password" id="password" name="password" placeholder="Password" ref={password} required />
      <button  className='buttons btn btn-primary'>Login</button>
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