import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react';
import Notifications from './Notifications';
import CUTECAT from '../assets/CUTECAT.jpg'

function SidebarOption({ icon, label, isSelected, onSelect }) {
  return (
    <div className="option d-flex gap-2" onClick={onSelect}>
      <i className={`${icon}${isSelected ? '-fill' : ''}`} style={{color:"#0d6efd"}}></i>
      <span>{label}</span>
    </div>
  );
}

const SideBar = ({id,todos}) => {
  const navigator=useNavigate();
  const [selected,setSelected]=useState('home')



  return (
    <div className='sidebar px-2' >  
        <div className="d-flex flex-column gap-5 px-4 align-items-start">
            <SidebarOption
              icon="bi bi-house"
              label="Home"
              isSelected={selected === 'home'}
              onSelect={() => {
                setSelected('home');
                navigator(`/tasks/id/${id}`);
              }}
            />
            <SidebarOption
              icon="bi bi-person"
              label="Profile"
              isSelected={selected === 'profile'}
              onSelect={() => {
                setSelected('profile');
                navigator(`/profile/id/${id}`);
              }}
            />
            <SidebarOption
              icon="bi-bar-chart"
              label="Stats"
              isSelected={selected === 'stats'}
              onSelect={() => {
                setSelected('stats');
                navigator(`/stats/id/${id}`);
              }}
            />
         <div className="option d-flex gap-2" onClick={()=>navigator('/signup')}>
  <i className="bi bi-person-plus"  style={{color:"#0d6efd"}}></i>
  <span>Signup</span>
</div>
          <div className="option d-flex gap-2">
            <i className="bi bi-chat-left-text"  style={{color:"#0d6efd"}}></i>
            <span>Feedback</span>
          </div>
        </div>
    </div>
  )
}

export default SideBar