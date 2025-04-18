'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'

type ImageData = {
    id:number,
    author:string,
    download_url:string
}

type PostProps = {
    data:ImageData[],
    setPageNo:React.Dispatch<React.SetStateAction<number>>;
}

const Post = ({data,setPageNo} : PostProps) => {

  useEffect(() => {
     const images = document.querySelectorAll(".image-post")
    const lastImage = images[images.length - 1]
    console.log(lastImage)

    let observer = new IntersectionObserver((entries)=> {
        console.log(entries)
        if(entries[0].isIntersecting){
            observer.unobserve(lastImage)
            setPageNo((pageNo) => pageNo + 1)
        }
    },{threshold:0.5})
    if(!lastImage) return
    observer.observe(lastImage)
    // cleanup the observer
    return () => {
        if(lastImage){
            observer.unobserve(lastImage)
        }
        observer.disconnect()
    }
  },[data])  
  return (
    <div>
        {
            data.length > 0 && (
                data.map((item) => (
                    <Image key={item?.id} src={item?.download_url} width={400} height={400} alt="Image" className='object-cover rounded-[54px] m-[5px] image-post'/>
                ))
            )
        }
    </div>
  )
}

export default Post
