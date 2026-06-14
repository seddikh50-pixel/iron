"use client"
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);


export default function Home() {
  const videoRef1 = useRef()
  const videoWrapper1 = useRef()
  const videoRef2 = useRef()
  const videoWrapper2 = useRef()
  useGSAP(() => {
    const video1 = videoRef1.current;
    const video2 = videoRef2.current;

    console.log(video1.duration);
    console.log(video2.duration);

    if (!video1) return;
    if (!video2) return;

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


    video1.onloadedmetadata = () => {
      tl1.to(video1, {
        currentTime: 10,
        ease: "none",
      });
    };


    video2.onloadedmetadata = () => {
      tl2.to(video2, {
        currentTime:10,

      });
    };


  }, []);
  return (
    <div>
      {/* <div className="w-full h-96"></div> */}
      <div ref={videoWrapper1} className=" h-screen w-full  ">
        <video ref={videoRef1} muted playsInline preload="auto" src="output2.mp4" className="h-full w-full object-cover"></video>

      </div>

      <div ref={videoWrapper2} className=" h-screen w-full  ">
        <video ref={videoRef2} muted playsInline preload="auto" src="output.mp4" className="h-full w-full object-cover"></video>

      </div>
    </div>
  );
}
