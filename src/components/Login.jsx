import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Login() {
  const username=useRef();
  const  password=useRef();
  const navigate=useNavigate();
  const Name=localStorage.getItem("username");
  const Password=localStorage.getItem("password")
  const [show,setShow]=useState(false)

 

  const handlesubmit=(e)=>{
    e.preventDefault();
    if(Name){
      setShow(true)
    }
    if(Password){
      setShow(true)
    }
    if(username.current.value == Name  && password.current.value == Password){
      localStorage.getItem("username",username.current.value);
      localStorage.getItem("password",password.current.value);
      navigate('/')
    }else{
      alert('register first')
      navigate('/register')
        }
  }
  return (
    <body className='bg-black login'>
     <div className="container1">
  <div className="card1">
    <h2>Login</h2>
    <form onSubmit={handlesubmit}>
      <input type="text" id="username" name="username" placeholder="Username" ref={username} required />
      <input type="password" id="password" name="password" placeholder="Password" ref={password} required />
      <button type="submit" className='buttons btn btn-primary'>Login</button>
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