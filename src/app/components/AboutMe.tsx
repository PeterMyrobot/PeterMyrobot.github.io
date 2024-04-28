import React from 'react';
import Skills from './Skills';

function AboutMe() {
  return (
    <div className="flex flex-col justify-around h-full">
      <div className="flex flex-col overflow-hidden">
        <p className="text-xl sm:text-2xl font-medium text-c2 border-l-2 border-c4 pl-4 mb-2">
          About Me
        </p>
        <div className="flex flex-1 overflow-scroll">
          <p className="text-sm sm:text-xl text-c2">
            As a dedicated JavaScript developer with 6 years of experience, I have a strong focus on
            the React.js ecosystem and possess in-depth practical knowledge of its peripheral
            technologies such as Redux and React Router.
            <br />
            <br />
            I actively embrace emerging front-end trends, including Next.js, TypeScript, and
            Tailwind CSS, and exhibit an enthusiasm for exploring novel frameworks like Svelte.
            <br />
            <br />
            In my professional work, I developed a second-hand trading platform using React,
            catering to over 100,000 active users, demonstrating my capability in building
            large-scale applications. To ensure code quality, I am well-versed in utilizing tools
            like Jest and Playwright for conducting unit tests and end-to-end tests. I also possess
            extensive CI/CD experience, adeptly leveraging GitHub Actions for continuous integration
            and deployment processes.
            <br />
            <br />
            Due to my keen interest in graphical user interfaces, several of my past projects have
            revolved around visualization applications. I am proficient in utilizing JavaScript
            rendering libraries such as PIXI.js, D3, and G6. As a side project, I aspire to
            gradually visualize different algorithms, allowing for a more intuitive understanding of
            their inner workings through visual representations.
            <br />
            <br />
            Beyond software development, I possess knowledge in mechanical and electrical
            engineering technologies, including BLE communication for software-hardware integration,
            and have a proven track record of delivering innovative solutions with a comprehensive
            perspective.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
