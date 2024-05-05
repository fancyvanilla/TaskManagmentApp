import React,{useEffect, useState} from 'react'
import { ResponsivePie } from '@nivo/pie'

const element=(id,label,value,color)=>{
    return {
    "id":id,
    "label":label,
    "value":value,
    "color":color}
}
const getData=(todos)=>{
    let completed=0;
    for(let task of todos){
      if (task.done)
      completed++;
    }
    completed=Math.round(completed/(todos.length)*100);
    let notCompleted=100-completed;
    let data=[]
    data.push(element('notcompleted', "tasks not completed", notCompleted, 'hsl(0, 0%, 50%)')) // blue
    data.push(element('completed', "tasks completed", completed, 'rgb(244, 117, 96')) // grey   
    return data
  }

const Pie = ({todos}) => {
const [data,setData]=useState([])
useEffect(() =>setData(getData(todos))
,[todos])
    return (
        <div className='pie-container'>
      <ResponsivePie
        data={data}
        margin={{ top: 0, right:80 , bottom: 80, left:80  }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="white"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        enableArcLinkLabels={false}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
        theme={{
          labels:{
            text:{
              fontSize: '25px',
              fontWeight: '500',
              color: "white"
            }
          }
        }}
        legends={[
          {
              anchor: 'bottom',
              direction: 'row',
              justify: false,
              translateX: 0,
              translateY: 20,
              itemsSpacing:30 ,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: '#FFFFFF',
              itemDirection: 'left-to-right',
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: 'circle',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemTextColor: 'white'
                      }
                  }
              ]
          }
      ]}
      />
      </div>
    );
  };

  export default Pie;
