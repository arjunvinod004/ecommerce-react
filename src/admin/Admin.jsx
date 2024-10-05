import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
function Admin() {

    const username=useRef();
    const password = useRef();
    const getusername=localStorage.getItem("username");
    const getpassword=localStorage.getItem("password");
const navigate=useNavigate();
    const handleformsubmit=()=>{
        if(username.current.value=='deals' && password.current.value=='zaq123'){
            localStorage.setItem("username","deals");
            localStorage.setItem("password","zaq123");
            navigate('/dashboard');
        }else{
            navigate('/admin');
        }
        
    }

    console.log(username);
    
  return (
    <body className='bg-black login'>
     <div className="container1">
  <div className="card1">
    <h2>Admin</h2>
    <form onSubmit={handleformsubmit}>
      <input type="text" id="username" name="username" placeholder="Username" ref={username} required />
      <input type="password" id="password" name="password" placeholder="Password" ref={password} required />
      <button className='btn btn-primary' >Submit</button>
    </form>
   


  </div>
</div>

  </body>
  )
}

export default Admin