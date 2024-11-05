import React, {useEffect, useRef} from 'react'
import Image from 'next/image'
import animatedLogo from '../../assets/icons/logo-white.svg'
import { fill } from 'lodash'
import './loading.styles.scss'

function Loading() {
  return (
    <div className='flex flex-row items-center justify-center w-[full] h-[100vh] bg-black'>
      {/* <span className='text-4xl text-white'>Loading.....</span> */}
      {/* <Image src='/logoonlywhite.png' className='animated-logo' alt='animated logo' width={200} height={200}/> */}
    
        <Image src="/intro.gif" width={1500} height={1000}/>

    </div>
  )
}

export default Loading
