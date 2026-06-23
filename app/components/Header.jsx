import { useGSAP } from '@gsap/react'
import { MoveUpRight } from 'lucide-react';
import React, { useEffect } from 'react'
import { Circle } from 'lucide-react';
import Link from 'next/link';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollToPlugin);

const Headers = ({ tl }) => {

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
      <div className='flex items-center gap-2 whitespace-nowrap sm:text-sm  '><Circle fill="yellow" stroke='yellow' size={15} /> Hamaidi &ensp;  <span className='xl:block lg:block md:block hidden sm:hidden'>/</span> &ensp; <span className='xl:block lg:block md:block hidden sm:hidden'>Abou Seddik</span></div>
      <div className='flex gap-10'>
        <h1 className='hover:text-amber-300 cursor-pointer sm:text-sm text-xs' 
         onClick={() => {
          gsap.to(window, {
            duration: 1,
            scrollTo: ".hero",
            ease: "power2.out"
          })
        }}>HERO</h1>
        <h1 className='hover:text-amber-300 cursor-pointer sm:text-sm text-xs' 
        onClick={() => {
          gsap.to(window, {
            duration: 1,
            scrollTo: ".skills",
            ease: "power2.out"
          })
        }}  >SKILLS</h1>
      </div>
      <div>

        <Link className='border  xl:px-4 sm:px-2 px-1 xl:py-1 py-[2px] ml-5 border-gray-700 sm:text-sm rounded-4xl flex gap-1 xl:text-sm sm:text-[10px] text-[10px]  items-center' href={"https://www.linkedin.com/in/hamaidi-seddik-28ab4634a/"} target="_blank"><span>CONTACT</span> <MoveUpRight size={20} /></Link>
      </div>
    </header>
  )
}

export default Headers
