import React from 'react'
import Pie from './Pie.jsx';
import { useParams } from 'react-router-dom'
import SideBar from './SideBar'
import BarChart from './BarChart.jsx';

const Stats = ({todos}) => {
    const {id}=useParams();

  return (
    <div className='d-flex flex-row'>
      <SideBar id={id} todos={todos} />
      <div className='d-flex flex-column align-items-start' >
      <h4 className='stats-header text-center mt-5 mx-auto'>We provide these statistics to help you track your progress and productivity 🚀.</h4>
        <div className='stats mt-5 d-flex'>
        <div className='d-flex flex-column align-items-center'>
      <h2 className='text text-center logo-color'>Progress ✨</h2>
      <Pie todos={todos}/>
      </div>
      <div className='d-flex flex-column align-items-center'>
      <h2 className='text text-center logo-color'>Categories Progress ✨</h2>
      <BarChart tasks={todos}/>
      </div>
      </div>
      </div>
      </div>
  )
}

export default Stats