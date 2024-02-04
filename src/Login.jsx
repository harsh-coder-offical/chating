// import axois from 'axois'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


var space = "100%"

export default function Login() {
  const [user,setUser] = useState('')
  const [email,setemail] = useState('')
  const [password,setpassword] = useState('')

  const navigate = useNavigate()

  function redirect(){
    var bn = localStorage.getItem('token')
    if (bn){
      navigate("/profile")
    }else{
      console.log("j");
    }
  } 

  function handlesumbit(e) {
    e.preventDefault();
    
    fetch(`http://localhost:3001/register/${user}/${email}/${password}`)
        .then((response) => response.json()) // Convert response to JSON
        .then((data) => {
            localStorage.setItem("token", data); // Assuming the token is present in the response
            console.log(data);
            navigate('/profile');
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle errors here
        });
}
redirect()
  return (
    
    <form className='spaceBro' onSubmit={handlesumbit}>
  <div className="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' placeholder="Enter user" onChange={(e)=>{setUser(e.target.value)}}/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' placeholder="Enter email" onChange={(e)=>{setemail(e.target.value)}}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='username'  onChange={(e)=>{setpassword(e.target.value)}} />
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" style={{width:space}}>Submit</button>
</form>
  )
}
