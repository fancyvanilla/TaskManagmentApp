import React from 'react'
import { useState } from 'react'
import {login} from '../Service/Service'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');
  const navigator = useNavigate();

  const validate=()=>{
    login({username,password}).then(response=>{
      if (response.data.status){
        console.log(response.data)
        localStorage.setItem('token', response.data.token);
        navigator(`/tasks/id/${response.data.user}`)
      } 
      else setError(response.data.message)
    })

  }

  return (

    <div className='d-flex login flex-column align-items-center mx-auto bg-white justify-content-center '>
      <h1 className='text-black mb-4'>Welcome Back!</h1>
      <div className='mb-4 col-sm-5 col-md-6 mt-4  '>
        <input type="text" name="username" className='form-control' placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
      </div>
      <div className='mb-4 col-sm-5 col-md-6  '>
        <input type="password" name="password" className='form-control' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
      </div>
      <div className='mb-4 col-sm-5 col-md-6  '>
      <button className="btn btn-primary w-100" onClick={validate} disabled={username.trim().length==0 || password.trim().length==0} >Login</button>
      <p className="text-muted text-center forgot-password" onClick={()=>alert("Take a deep breath and try to remember 😌")}>Forgot your password?</p>
      <p style={{color:"red"}} className='mx-2'>{error}</p>
      <button className="btn btn-primary col-5" onClick={()=>navigator("/signup")} >Signup</button>
      </div>
     </div>

  )
}

export default Login