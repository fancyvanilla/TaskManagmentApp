import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Authorized = () => {
const navigator = new useNavigate();
  return (
    <div className='text-white d-flex flex-column justify-content-center mt-4 gap-4 '>
    <h2 className='text-center'>Not Authorized</h2>
    <div className='mx-auto'>
    <button onClick={()=>navigator("/login")}>Login</button>
    </div>
    </div>
  )
}
export default Authorized
