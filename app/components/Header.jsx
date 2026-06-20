import { useGSAP } from '@gsap/react'
import { MoveUpRight } from 'lucide-react';
import React, { useEffect } from 'react'
import { Circle } from 'lucide-react';
import Link from 'next/link';


const Headers = ({tl}) => {

useEffect(() => {
  if (!tl) return;


  // tl.from(".header", {
  //   y: 100,
  //   ease: "none",
  // }, 0);
  tl.to(".header", {
    backgroundColor: "black",
    ease: "none",
  }, 0);

}, [tl]);
  return (
    <header className='header h-20 fixed top-0 z-10 bg-black/5 border-b-[0.5px] border-amber-50/5 flex justify-between items-center px-20 text-gray-300  w-full'>
        <div className='flex items-center gap-2'><Circle fill="yellow" stroke='yellow' size={15}/> Hamaidi &ensp;  / &ensp; Abou Seddik</div>
        <div className='flex gap-10'>
          <h1>SYSTEMS</h1>
          <h1>ARCHIVE</h1>
        </div>
        <div>
        
          <Link className='border  px-4 py-1 border-gray-700 rounded-4xl flex gap-1 text-sm items-center' href={"https://www.linkedin.com/in/hamaidi-seddik-28ab4634a/"} target="_blank"><span>CONTACT</span> <MoveUpRight size={20} /></Link>
        </div>
    </header>
  )
}

export default Headers
