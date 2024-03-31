import {
  SiReact,
  SiPython,
  SiVuedotjs,
  SiGit,
  SiBluetooth,
  SiSwift,
  SiTailwindcss,
  SiNextdotjs,
  SiElectron,
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiTypescript,
  SiGraphql,
  SiCplusplus,
  SiArduino,
} from 'react-icons/si';

const skills = [
  { icon: SiReact, label: 'React.js', group: 'web' },
  { icon: SiVuedotjs, label: 'Vue.js', group: 'web' },
  { icon: SiNextdotjs, label: 'Next.js', group: 'web' },
  { icon: SiTailwindcss, label: 'Tailwind CSS', group: 'web' },
  { icon: SiHtml5, label: 'HTML', group: 'web' },
  { icon: SiJavascript, label: 'JavaScript', group: 'web' },
  { icon: SiTypescript, label: 'TypeScript', group: 'web' },
  { icon: SiCss3, label: 'CSS3', group: 'web' },
  { icon: SiGraphql, label: 'GraphQL', group: 'web' },
  { icon: SiPython, label: 'Python', group: 'general' },
  { icon: SiGit, label: 'Git', group: 'general' },
  { icon: SiCplusplus, label: 'C++', group: 'general' },
  { icon: SiArduino, label: 'Arduino', group: 'general' },
  { icon: SiElectron, label: 'Electron', group: 'general' },
  { icon: SiSwift, label: 'Swift', group: 'Mobile' },
  { icon: SiReact, label: 'React Native', group: 'Mobile' },
  { icon: SiBluetooth, label: 'Bluetooth', group: 'general' },
];

function Skills() {
  const skillList = skills.map((skill) => (
    <div
      key={skill.label}
      className="flex flex-col items-center justify-center w-[30px] h-[30px] md:w-[60px] md:h-[60px] border-2 border-c2 rounded-md mx-[10px] bg-c2/25"
    >
      <skill.icon size={50} color="#FBFBFB" />
      <p className="text-c2 mt-2 hidden md:block">{skill.label}</p>
    </div>
  ));
  return (
    <div className="bg-bluedark relative h-[60px] my-4 md:h-[130px] md:my-8 w-4/5">
      <div className=" absolute top-0 left-0 bg-gradient-to-r from-bluedark w-40 z-10 h-full"></div>
      <div className="flex flex-row overflow-hidden relative h-[30px] md:h-[130px]">
        <div className="animate-x-scrolling absolute flex flex-row ">
          {skillList}
          {skillList}
          {skillList}
        </div>
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-bluedark w-40 z-10 h-full"></div>
    </div>
  );
}

export default Skills;
