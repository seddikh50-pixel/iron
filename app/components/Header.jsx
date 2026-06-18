import { useGSAP } from '@gsap/react'
import React, { useEffect } from 'react'

const Headers = ({tl}) => {

useEffect(() => {
  if (!tl) return;

  tl.to(".header", {
    backgroundColor: "black",
    ease: "none",
  }, 0);

}, [tl]);
  return (
    <div className='header h-20 fixed top-0 z-10 bg-black/5 border-b-[0.5px] border-amber-50/5  w-full'>
      
    </div>
  )
}

export default Headers
