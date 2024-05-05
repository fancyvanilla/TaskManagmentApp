import { ResponsiveBar } from '@nivo/bar'
import react,{useState,useEffect} from 'react'

const element=(cat,nb)=>({
    "category":cat,
    "number of tasks":nb
})


const getData=(tasks) => {
    let cats=new Map()
    for(let task of tasks){
        if (!task.category) continue;
        if (cats.has(task.category)){
            cats.set(task.category,cats.get(task.category)+1)
        }else{
            cats.set(task.category,1)
        }
    }
    let data = [];
    cats.forEach((value, key) => data.push({ category: key, value: value }));
    return data;
}


const BarChart= ({tasks}) => {

   const[data,setData] = useState([])

   useEffect(() =>setData(getData(tasks))
   ,[tasks])


    return(
        <div className='bar-container'>
    <ResponsiveBar
        data={data}
        keys={["value"]}
        indexBy="category"
        margin={{ top: 50, right: 130, bottom: 50, left: 70 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors="#f47560"
        theme={{
            axis: {
              ticks: {
                text: {
                  fill: 'white', // Red color
                },
              },
              legend: {
                text: {
                  fill: 'white', // Green color
                },
              },
            },
          }}
        
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'category',
            legendPosition: 'middle',
            legendOffset: 40,
            truncateTickAt: 0,
           
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'number of tasks completed',
            legendPosition: 'middle',
            legendOffset: -60,
            truncateTickAt: 0
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor= {{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemTextColor: 'white',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />
    </div>
    )}

    export default BarChart