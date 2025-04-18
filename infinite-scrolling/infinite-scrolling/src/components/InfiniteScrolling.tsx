'use client'
import axios from 'axios'

import React, { useState,useEffect } from 'react'
import Post from './Post'

type ImageData = {
    id:number,
    author:string,
    download_url:string
}

const InfiniteScrolling = () => {
  const [data,setData] = useState<ImageData[]>([])
  const [pageNo,setPageNo] = useState<number>(1)

  const fetchImages = async(pageNo:number) => {
    try{
        const response = await axios(`https://picsum.photos/v2/list?page=${pageNo}&limit=3`)
        const data = response.data
        setData((prevData) => [...prevData, ...data])
    }catch(error){
        console.log(error)
    }
  }
  
  useEffect(() => {
    fetchImages(pageNo)
  },[pageNo])
  
  return (
    <div>
      <Post data={data} setPageNo={setPageNo}/>
    </div>
  )
}

export default InfiniteScrolling
