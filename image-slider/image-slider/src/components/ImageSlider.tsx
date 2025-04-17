'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ImageSlider = () => {
  const[data,setData] = useState<any[]>([])
  const [imageIndex,setImageIndex] = useState<number>(0)  

  const fetchData = async() => {
    try{
        const response = await axios('/data/data.json')
        console.log(response.data)
        setData(response.data)
    }catch(error){
        console.log("Error fetching data")
    }
  }

  useEffect(() => {
    fetchData()
  },[])
  const lengthOfData = data.length

  const handleNextImage = () => {
    if(imageIndex === lengthOfData - 1){
        setImageIndex(0)
    }
    else{
        setImageIndex(imageIndex+1)
    }
  }
  const handlePrevImage = () => {
    if(imageIndex > 0){
        setImageIndex(imageIndex - 1)
    }
  }
  return (
    <div className='relative'>
      <div className='absolute text-black top-[50%] p-0.5 bg-yellow-400 left-1 cursor-pointer rounded-xl' onClick={handlePrevImage}>{"<"}</div>
      {lengthOfData > 0 && data[imageIndex]?.download_url && (
        <Image src={data[imageIndex]?.download_url} width={400} height={400} alt='Image carousel'/>
      )}
      <div className='absolute text-black top-[50%] p-0.5 bg-yellow-400 right-[61rem] cursor-pointer rounded-xl' onClick={handleNextImage}>{">"}</div>
    </div>
  )
}

export default ImageSlider
