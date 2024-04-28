'use client';

import StarCanvas from './components/StarCanvas';
import useTypewriter from '@/hooks/useTypeWriter';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import MenuOption from './components/MenuOption';
import { ReactElement, useState } from 'react';
import MenuContentContainer from './components/MenuContentContainer';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';

export default function Home() {
  const [openedMenu, setOpenMenu] = useState(null as any);
  const { displayText, playEnd } = useTypewriter("I'm Peter Yang", 100);

  const contentMap: Record<string, ReactElement> = {
    'About Me': <AboutMe />,
    'Work Experience': <WorkExperience />,
  };

  const handleMenuClick = (option: string) => {
    if (option in contentMap) {
      setOpenMenu(option);
    } else {
      setOpenMenu(null);
    }
    console.log(option);
  };

  const menuOption = ['About Me', 'Work Experience'];

  return (
    <div className="relative flex flex-col bg-black justify-center h-screen items-center  ">
      <StarCanvas />
      <div className="w-full z-10 overflow-scroll no-scrollbar relative ">
        <div className="absolute justify-around animate-menuOpen overflow-x-hidden z-20">
          <div className="flex justify-around w-screen ">
            {menuOption.map((option) => {
              return <MenuOption key={option} optionLabel={option} onClick={handleMenuClick} />;
            })}
          </div>
        </div>
        <div className="h-screen flex flex-col justify-center items-center">
          <div>
            <h1 className="text-2xl sm:text-4xl md:text-6xl text-c2 text-center font-bold bg-bluedark/[.8]">
              {displayText}
            </h1>
            <p className="text-white text-sm sm:text-base mt-4 text-center">
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
        </div>
        {openedMenu && (
          <MenuContentContainer
            key={openedMenu}
            content={contentMap[openedMenu]}
            onClose={() => {
              setOpenMenu(null);
            }}
          />
        )}
      </div>
    </div>
  );
}
