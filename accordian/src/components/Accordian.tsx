'use client'
import React, { useState } from 'react'

type AccordianItem = {
  title:string,
  content:string
}

const Accordian = () => {
  const [openIndex,setOpenIndex] = useState<number | null>(null)
  const data:AccordianItem[] = [
    {title:'Section 1',content:"This is data 1"},
    {title:'Section 2',content:"This is data 2"},
    {title:'Section 3', content:"This is data 3"}
  ]
  const toggle = (index:number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <div className='w-full'>
       {data.map((item,i) => (
        <div key={i} className='border-b'>
          <p>{item?.title}</p>
          <button className='' onClick={() => toggle(i)}>+</button>
          {openIndex === i && (
          <div className='p-4 text-gray-400 border-2'>{item?.content}</div>
        )}
        </div>
       ))} 
    </div>
  )
}

export default Accordian
