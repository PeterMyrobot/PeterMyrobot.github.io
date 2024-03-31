'use client';
import Image from 'next/image';

import StarCanvas from './components/StarCanvas';
import useTypewriter from '@/hooks/useTypeWriter';
import { IoArrowDownCircleOutline, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import Me from '../../public/images/me.jpg';
import Skills from './components/Skills';

export default function Home() {
  const typingTitle = useTypewriter("I'm Peter Yang", 100);

  return (
    <div className="relative flex flex-col bg-black justify-center h-screen items-center ">
      <StarCanvas />
      <div className="w-full z-10 overflow-scroll no-scrollbar">
        <div className="h-screen flex  flex-col justify-center items-center  ">
          <div>
            <h1 className="text-2xl sm:text-4xl md:text-6xl text-c2 text-center font-bold bg-bluedark/[.8]">
              {typingTitle}
            </h1>
            <p className="text-white text-sm sm:text-base mt-4 text-center bg-bluedark/[.8]">
              Software Engineer base in Taiwan, leaning, coding, and have fun!
            </p>
          </div>
          <div className="flex justify-center space-x-7 my-4">
            <a href="https://github.com/PeterMyrobot" target="_blank">
              <IoLogoGithub size={30} color="white" />
            </a>
            <a href="https://www.linkedin.com/in/weitseyang" target="_blank">
              <IoLogoLinkedin size={30} color="white" />
            </a>
          </div>
          <div className=" absolute bottom-5">
            <IoArrowDownCircleOutline size={20} />
          </div>
        </div>
        <div className=" m-10 flex justify-around ">
          <div className="rounded-xl border-2 border-c2 p-4 bg-bluedark/[.8] w-3/5 ">
            <p className="text-xl sm:text-2xl font-medium text-c2 border-l-2 border-c4 pl-4 mb-2">
              About Me
            </p>
            <p className="text-sm sm:text-xl text-c2">
              Dedicated to javascript with 6 years of experience in which I have acquired a wide
              range of technical skills ranging from the latest JavaScript frameworks to software
              architecture. Have experience with building products that have over 100,000 users. I
              am also familiar with the technologies related to mechanical and electrical, including
              the BLE communication between the software app and the real-world devices, having the
              ability to integrate software and hardware from a comprehensive perspective.
            </p>
          </div>
          <div className="rounded-xl border-2 border-c2 p-4 bg-bluedark/[.8] ">
            <p className="text-xl sm:text-2xl font-medium text-c2 border-l-2 border-c4 pl-4 mb-2">
              contact details
            </p>
            <ul className="text-sm sm:text-xl text-c2">
              <li>Peter yang </li>
              <li>Taipei, Taiwan </li>
              <li>+886 961296288</li>
              <li>weiyang2016@gmail.com</li>
            </ul>
          </div>
        </div>
        <Skills />
        <div className="h-[500px] bg-green-200 w-[200px]"></div>
        <div className="h-[500px] bg-green-100 w-[200px]"></div>
      </div>
    </div>
  );
}
