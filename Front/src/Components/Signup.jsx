import React from 'react'
import { useState } from 'react'
import {signup} from '../Service/Service'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
 
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const navigator = useNavigate();
    const [success,setSuccess]=useState(false);



    const notify = () => toast("You successfully signed up! Please login to continue");

    const validate=()=>{
        signup({username,password}).then(response=>{
            setError('')
            notify()
            setSuccess(true)   
        })
        .catch(error=>{
            console.log(error);
            setError('you are already signed up');

        })
      }

    return (
  
      <div className='d-flex login flex-column align-items-center mx-auto bg-white justify-content-center '>
        <h1 className='text-black mb-4'>Welcome!</h1>
        <div className='mb-4 col-sm-5 col-md-6 mt-4  '>
          <input type="text" name="username" className='form-control' placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div className='mb-4 col-sm-5 col-md-6  '>
          <input type="password" name="password" className='form-control' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <div className='col-sm-5 col-md-6 d-flex gap-2'>
        <button className="col-5" onClick={()=>{validate()}} disabled={username.trim().length==0 || password.trim().length==0} >signup</button>
        <button className="col-5" onClick={()=>navigator('/login')}>login</button> 
        </div>
        <p className='text mt-2' style={{color:"red"}}>{error}</p>
        <ToastContainer />
       </div>
  
    )
  }

export default Signup