import React,{useEffect} from 'react'
import Calendar from '@hassanmojab/react-modern-calendar-datepicker';


import { format } from 'date-fns';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const CalendarPicker = ({dueDate,setDueDate}) => {

    const today = {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1, 
        day: new Date().getDate(),
      };


   let footer = <p>Please pick a day.</p>;
   if (dueDate) {
     footer = <p>You picked {format(dueDate, 'PP')}.</p>;
   }
   return (
     <DayPicker
       mode="single"
       selected={dueDate}
       onSelect={setDueDate}
       footer={footer}
        style={{position:'absolute',top:'40%',left:'60%',zIndex:'1000',color:"white",
        backgroundColor:"#0d1117 ",boxShadow:"0px 0px 2px rgb(255, 255, 255)"
      }}
     />
   );
}

export default CalendarPicker