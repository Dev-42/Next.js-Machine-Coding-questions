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
    setPageNo:React.Dispatch<React.SetStateAction<number>>,
    loading:boolean
}

const Post = ({data,setPageNo,loading} : PostProps) => {

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
        {loading && (
        <div className="text-center my-4">
            <span className="animate-spin inline-block w-6 h-6 border-4 border-t-transparent border-blue-500 rounded-full"></span>
            <p className="text-sm text-gray-500 mt-2">Loading more...</p>
        </div>
        )}
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
