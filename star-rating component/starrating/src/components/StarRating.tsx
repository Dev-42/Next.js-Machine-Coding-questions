'use client'
import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'; 

const StarRating = ({starCount=5}) => {  
  const [starValue,setStarValue] = useState<number>(0) 
  const [hoverValue,setHoverValue] = useState<number>(0)
//   console.log(hoverValue)  
//   console.log(starValue)
  return (
    <div className='flex flex-row space-x-1'>
      {new Array(starCount).fill(0).map((_,i) => (
        <AiFillStar key={i} className={hoverValue===0 && i < starValue || i < hoverValue ? 'fill-amber-400': ""} onClick={() => setStarValue(i+1)} onMouseEnter={() => setHoverValue(i+1)} onMouseLeave={() => setHoverValue(0)}/> 
      ))}
    </div>
  )
}

export default StarRating
