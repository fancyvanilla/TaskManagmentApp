import React from 'react'
import CUTECAT from '../assets/CUTECAT.jpg'
import Search from './Search';
import Notifications from './Notifications';


const Navbar = ({username}) => {
  return (
  <div className='navbar px-4' >
  <h1 className='text-white'>Hi, <span className='username'>{username}👋</span></h1>
</div>
  )
}

export default Navbar





