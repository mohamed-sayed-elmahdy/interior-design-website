'use client'
import React, {useEffect, useState} from 'react'
import { usePathname, useParams } from 'next/navigation'
import Image from 'next/image'

function ProjectHeader() {
  const [img, setImg] = useState('')
  const imgSrc = usePathname()
  const titleArr = imgSrc.split('/')
  const title = titleArr[2].replaceAll('-',' ').toUpperCase()

  useEffect(() => {
    setImg(`${imgSrc}/1.png`)
    console.log('title', titleArr)
  },[img, imgSrc])

  return (
    <div>
     {img && (
      <div className='project-header-container h-[650px] w-full'>
       <Image src={img} width={1000} height={600} alt='header' className='img w-full h-full object-cover'/>
       <span className='absolute top-40 left-20 lg:top-80 text-2xl sm:text-4xl lg:text-5xl text-white z-30'>{title}</span>
      </div>
      )}
    </div>
  )
}

export default ProjectHeader
