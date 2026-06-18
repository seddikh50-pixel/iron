"use client"
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/src/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText);


export default function Home() {
  const videoRef1 = useRef()
  const videoWrapper1 = useRef()
  const videoRef2 = useRef()
  const videoWrapper2 = useRef()
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






    video1.onloadedmetadata = () => {


      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: videoWrapper1.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          markers: true,
        },
      });


      tl1.to(video1, {
        currentTime: 10,
        ease: "none",
      });

      tl1.to(".seddik", {
        x: 100,
        duartion: 2,
        ease: "none",
      });
    };




    video2.onloadedmetadata = () => {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: videoWrapper2.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          // markers: true,
        },
      });

      tl2.to(video2, {
        currentTime: 10,

      });
    };




  }, []);
  return (
    <div>

      <div ref={videoWrapper1} className=" h-screen bg-amber-400 w-full flex justify-start items-center  ">
       <div className="absolute top-20 right-5 bottom-10 left-5">
          <div className=" absolute w-7 h-7 border-t-1 border-l-1  border-amber-300"></div>
          <div className=" absolute w-7 h-7 border-r-1 border-t-1  right-0 border-amber-300"></div>
          <div className=" absolute w-7 h-7  border-r-1 border-b-1  right-0 bottom-0 border-amber-300"></div>
          <div className=" absolute w-7 h-7 border-l-1 border-b-1 bottom-0 border-amber-300"></div>
        </div>
        <div className="seddik absolute text-white text-6xl z-10 pl-10 ">
          <h1 className="mb-5">Hamaidi </h1>
          <h1 className="text font-bold text-8xl">Abou <span className="text-[#d4af37]">Seddik</span></h1>

        </div>
        <video ref={videoRef1} muted playsInline preload="auto" src="output2.mp4" className="h-full w-full object-cover"></video>

      </div>

      <div ref={videoWrapper2} className=" relative h-screen w-full  ">
          <div className="absolute top-20 right-5 bottom-10 left-5">
          <div className=" absolute w-7 h-7 border-t-1 border-l-1  border-amber-300"></div>
          <div className=" absolute w-7 h-7 border-r-1 border-t-1  right-0 border-amber-300"></div>
          <div className=" absolute w-7 h-7  border-r-1 border-b-1  right-0 bottom-0 border-amber-300"></div>
          <div className=" absolute w-7 h-7 border-l-1 border-b-1 bottom-0 border-amber-300"></div>
        </div>
        <video ref={videoRef2} muted playsInline preload="auto" src="output.mp4" className="h-full w-full object-cover"></video>

      </div>
      {/* <div className="w-full h-96 "></div> */}
    </div>
  );
}
