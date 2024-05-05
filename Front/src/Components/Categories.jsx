import React,{useMemo} from 'react'
import Category from './Category'

const Categories = ({categories}) => {

    let colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D', '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC', '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399', '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933', '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF']

    const colorMap = useMemo(() => new Map(), []);
    
    const getColor = (category) => {
        let lowerCaseCategory = category.toLowerCase();
        if (colorMap.has(lowerCaseCategory)) {
          return colorMap.get(lowerCaseCategory);
        } else {
          const colorIndex = Math.floor(Math.random() * colors.length);
          const newColor = colors[colorIndex];
          colors = colors.filter((_, index) => index !== colorIndex); // remove the chosen color from the array
          colorMap.set(lowerCaseCategory, newColor);
          return newColor;
        }
      };

  return (
    <div className='d-flex flex-row mx-2 gap-1'>
        {
        categories.map( 
            cat=> {
            let color=getColor(cat.toLowerCase());
            return <Category category={ cat.toLowerCase() } color={color} />
        })
        }
    </div>
  )
}

export default Categories