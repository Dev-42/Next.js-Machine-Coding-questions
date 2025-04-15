'use client'
import React, { useState } from 'react'

type AccordianData = {
    id:number,
    title:string,
    content:string,
}

const MultiselctionAccordian = () => {
  const [openIndex,setOpenIndex] = useState<number[]>([]) 
  const data:AccordianData[] =[
    {id:1,title:'Section 1',content:"This is data 1"},
    {id:2,title:'Section 2',content:"This is data 2"},
    {id:3,title:'Section 3', content:"This is data 3"}
  ] 
  const toggleAccordian = (index:number) => {
    if(openIndex.includes(index)){
        setOpenIndex(openIndex.filter((accordianItem)=>accordianItem !== index))
    }else{
        setOpenIndex([...openIndex,index])
    }
  }
  return (
    <div className='w-full mx-auto'>
      {data.map((item) => (
        // Accordian section div
        <div key={item.id} className='border-b'>
           <p>{item.title}</p>
           <button onClick={() => toggleAccordian(item.id)}>{openIndex.includes(item.id) ? '-' : '+'}</button>  
           {openIndex.includes(item.id) && (
            <div className='p-6 bg-gray-400'>
                {item.content}
            </div>
           )}   
        </div>
      ))}
    </div>
  )
}

export default MultiselctionAccordian
