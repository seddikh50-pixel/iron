"use client"
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/src/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import { Circle } from 'lucide-react';
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiGsap } from "react-icons/si";



gsap.registerPlugin(ScrollTrigger, useGSAP);


export default function Home() {
  const [tl, setTl] = useState(null)
  const [counter, setCounter] = useState(0)
  const videoRef1 = useRef()
  const videoWrapper1 = useRef()
  const videoRef2 = useRef()
  const videoWrapper2 = useRef()
  const iconRef = useRef()
  const [children, setChildren] = useState([]);

  useEffect(() => {
    if (!iconRef) return null
    const children = Array.from(iconRef.current.children)



  }, []);
  useGSAP(() => {
    const video1 = videoRef1.current;
    const video2 = videoRef2.current;

    const split = SplitText.create(".text", {
      type: "chars"
    })

    gsap.from(split.chars, {
      opacity: 0,
      stagger: 0.1,

    })





    if (!video1) return;
    if (!video2) return;


    const duration = video1.duration




    // video1.onloadedmetadata = () => {


    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: videoWrapper1.current,
        start: "top top",
        end: "+=1000",
        scrub: 1,
        pin: true,

        onUpdate: (self) => {
          setCounter(self.progress * 100); // من 0 إلى 1
        }
      }
    });

    tl1.to(video1, {
      currentTime: duration,
      ease: "none",
    });

    tl1.fromTo(".message",
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 1,
        ease: "none",
      },
      "<" // يبدأ مع الفيديو
    );

    tl1.to(".message", {
      y: -40,
      opacity: 0,
      duration: 1,
      stagger: 1,
      ease: "none",
    });

    tl1.to(".text1", {
      y: -100,
      opacity: 0,
      duration: 2,
      ease: "none",
    }, "<");
    tl1.from(".text2", {
      y: 100,
      opacity: 0,
      duration: 2,
      ease: "none",
    });







    setTl(tl1)





    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: videoWrapper2.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });

    tl2.to(video2, {
      currentTime: 10,

    })

    // c onsole.log(iconRef.current.children)
    // console.log(gsap.utils.toArray(iconRef.current.children))
    gsap.utils.toArray(iconRef.current.children).forEach((ic, i) => {
      tl2.from(ic, {
        z: -6000,

        y: Math.floor(200 * Math.random())
      })
    }, ">")






  }, []);
  return (
    <div className="overflow-x-hidden ">

      <div ref={videoWrapper1} className=" h-screen bg-amber-400 w-full flex justify-start items-center  ">
        <Header tl={tl} />

        <div className="fixed text-amber-300 right-9 top-24 z-50 transition-all duration-200 flex justify-center items-center gap-2"><h1>{Math.floor(counter)}%</h1>       <Circle fill="yellow" size={15} />
        </div>
        <div className="absolute top-23 right-5 bottom-10 left-5">
          <div className=" absolute w-7 h-7 rounded-sm border-t-1 border-l-1  border-amber-300"></div>
          <div className=" absolute w-7 h-7 rounded-sm border-r-1 border-t-1  right-0 border-amber-300"></div>
          <div className=" absolute w-7 h-7 rounded-sm  border-r-1 border-b-1  right-0 bottom-0 border-amber-300"></div>
          <div className=" absolute w-7 h-7 rounded-sm   border-l-1 border-b-1 bottom-0 border-amber-300"></div>
        </div>
        <div className="text1 absolute text-white text-6xl z-10 pl-10  overflow-hidden ">
          <h1 className="mb-5 text-8xl">I am </h1>
          <h1 className="text font-bold text-8xl">Ham Abou <span className="text-[#d4af37]">Seddik</span></h1>
          <p className="paragraph text-2xl w-1/2 mt-10 text-gray-400">I'm a Web Developer specializing in HTML, CSS, JavaScript, React, Next.js, and Node.js. I build modern, responsive, and interactive websites and web applications, focusing on performance, clean code, and engaging user experiences.</p>
        </div>
        <div className="text2 absolute text-white text-6xl z-10 pl-10  overflow-hidden ">
          <h1 className="mb-5 text-8xl">Built with </h1>
          <h1 className="text font-bold text-8xl"> Next.js & <span className="text-[#d4af37]">GSAP</span></h1>
          <p className="paragraph text-2xl w-1/2 mt-10 text-gray-400">Crafting interactive web experiences with modern tools. A smooth blend of performance and animation. Building fast, animated, and modern web experiences.</p>
        </div>
        <div className="message absolute text-white flex flex-col justify-between h-30 px-2 py-3  right-20 top-40 z-2 w-80  backdrop-blur-md  bg-[#121211]/50 rounded-lg border-[#292927] border-[0.5px] ">
          <h1>''Building experiences, not just websites.''</h1>
          <div className="flex justify-between px-2">
            <h1 className=" text-white/50">Abou</h1>
            <h1 className="text-amber-300/50 ">hamaidi seddik</h1>
          </div>
        </div>
        <div className="message  absolute text-white flex flex-col justify-between h-30 px-2 py-3  right-20 top-103 z-2 w-80 backdrop-blur-md  bg-[#121211]/50 rounded-lg border-[#292927] border-[0.5px] ">
          <h1>''Developer. Designer. Dreamer. Builder.''</h1>
          <div className="flex justify-between px-2">
            <h1 className=" text-white/50">Abou</h1>
            <h1 className="text-amber-300/50 ">hamaidi seddik</h1>
          </div>
        </div>

        <div className="message  absolute text-white flex flex-col justify-between h-30 px-2 py-3  right-20 top-165 z-2 w-80 backdrop-blur-md   bg-[#121211]/50 rounded-lg border-[#292927] border-[0.5px] ">
          <h1>''What ends one project starts another idea.''</h1>
          <div className="flex justify-between px-2">
            <h1 className=" text-white/50">Abou</h1>
            <h1 className="text-amber-300/50 ">hamaidi seddik</h1>
          </div>
        </div>
        <video ref={videoRef1} muted playsInline preload="auto" src="output2.mp4" className="h-full w-full object-cover"></video>

      </div>

      <div ref={videoWrapper2} className=" relative h-screen w-full overflow-hidden  ">


        <div className="absolute top-10 right-5 bottom-10 left-5">
          <div className=" absolute w-7 rounded-sm h-7 border-t-1 border-l-1  border-amber-300"></div>
          <div className=" absolute w-7 rounded-sm h-7 border-r-1 border-t-1  right-0 border-amber-300"></div>
          <div className=" absolute w-7 rounded-sm h-7  border-r-1 border-b-1  right-0 bottom-0 border-amber-300"></div>
          <div className=" absolute w-7 rounded-sm h-7 border-l-1 border-b-1 bottom-0 border-amber-300"></div>
        </div>
        <video ref={videoRef2} muted playsInline preload="auto" src="output.mp4" className="h-full w-full object-cover"></video>
        <div ref={iconRef} className="icons absolute z-100 inset-5 text-white flex justify-center items-center gap-5 perspective-[1000px]">
          <FaCss3Alt color="#FCD34D" size={200} />
          <FaHtml5 color="#FCD34D" size={200} />
          <FaJsSquare color="#FCD34D" size={200} />
          <FaReact color="#FCD34D" size={200} />
          <SiNextdotjs color="#FCD34D" size={200} />
          <FaNode color="#FCD34D" size={200} />
          <SiGsap color="#FCD34D" size={200} />
        </div>
      </div>
    </div>
  );
}
