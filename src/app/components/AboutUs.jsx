'use client'
import React from 'react'
import Image from 'next/image'
import img from '../assets/hareem-spa.webp'
import smallImage from '../assets/hareem-spa2.webp'
import smallImage1 from '../assets/hareem-spa3.webp'
import { easeInOut, motion, useTime, useTransform } from "framer-motion";

function AboutUs() {
  return (
    <section className='w-full h-auto lg:h-[720px] lg:p-2 mb-12 lg:mb-3'>
      <div>
        <div className='flex flex-col lg:grid lg:grid-cols-3 mt-16 px-4 lg:px-16 relative'>
          <div className='flex flex-col h-full text-2xl font-extrabold lg:w-[375px] mb-16 lg:my-0'>
            <p className='mb-2 sm:mt-0 lg:mb-6 font-bold text-black'>
              Designing with passion —
              crafting masterpieces
            </p>
            <p className='leading-[24.2px] text-[16px] text-[black] font-normal bg-white lg:w-[335px] lg:h-[151px]'>
              We are SH Designs. An interior and architectural design studio dedicated to creating and realizing exceptional private and commercial spaces. Discover contemporary, artistic,
              and functional designs that inspire elevated living, limitless creativity,
              and intimate gatherings."
            </p>
          </div>
          <div className='h-auto md:h-[400px] block lg:relative lg:mt-5 sm:mt-0'>
             <Image src={img} alt='about-main' className='lg:absolute -top-10 z-0 w-full h-full lg:h-auto'/>
             <motion.div className='flex flex-row w-full align-center items-center'
               whileHover={{
                x:-120,
                scale:1.1,
                transition: {duration:1.2, ease:'easeInOut'}  
              }}
             >
               <Image src={smallImage1} alt='about-small' className='absolute top-64 -left-32 z-32 hidden lg:block'/>
              </motion.div>
              <motion.div className='flex flex-row w-full align-center items-center'
                  whileHover={{ 
                    x:135,
                    scale:1.1,
                    transition: {duration:1.2, ease:'easeInOut'}  
                  }} 
                  onHoverStart={e => {}}
                  onHoverEnd={e => {}}
                  >
                <Image src={smallImage} alt='about-small' className='absolute top-14 -right-28 z-30 hidden lg:block'/>
              </motion.div>
          </div>
          <div className='h-auto lg:h-[700px] flex flex-col justify-center items-center lg:justify-end lg:ml-16 lg:w-2/3'>
             <div className='lg:max-w-[350px] md:w-full lg:w-[400px] flex flex-row justify-center gap-4 mt-6 lg:mt-3'>
              <span className='text-[64px] text-[black] lg:leading-[170px] font-bold hidden sm:block'>“</span>
               <p className='text-[black] font-normal w-2/3 lg:w-[90%] lg:w-full lg:my-[60px] lg:my-0 md:mr-20 xl:mr-0'>
                Our team is composed of talented professionals who approach each project as a personal creative triumph, delivering outstanding results. We are never content with the status quo.
                We continuously innovate with passion, improving with every new design
               </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
