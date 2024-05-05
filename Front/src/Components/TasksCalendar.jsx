import { ResponsiveCalendar } from '@nivo/calendar'

import React, { useEffect,useState } from 'react'


const TasksCalendar = ({ todos}) => {
    const [data,setData]=useState([])


    useEffect(()=>{
    let tasks=new Map();
    todos.forEach(todo=>{
        tasks.set(todo.dueDate.substr(0,10),tasks.get(todo.dueDate.substr(0,10))+1 || 1);
    })
    
    let datacopy=[];
    for (let [key, value] of tasks) {
        datacopy.push({day:key,value:value})
    }
    setData(datacopy)
    }
    ,[todos])
   
      return (
        <div className='calendar-container'>
    <ResponsiveCalendar
        data={data}
        from="2023-01-01"
        to="2024-31-12"
        emptyColor="#eeeeee"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left'
            }
        ]}
    />
    </div>
      )
};


export default TasksCalendar