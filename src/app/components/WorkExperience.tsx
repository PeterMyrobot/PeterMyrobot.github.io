import { IoEllipseOutline, IoEarthOutline } from 'react-icons/io5';

const EXPERIENCE = [
  {
    companyName: 'Trend Micro',
    location: 'Taiwan, Taipei',
    info: [
      {
        title: 'Senior Frontend Developer',
        during: 'April 2022 - Present',
        description: [
          'Developing React applications to visualize security alerts data using D3.js or Pixi.js',
          'Implementing and integrating new features with upstream data lake and design team',
          'ontributing to a shared component library based on feature requirements  ',
          'Making necessary adjustments to Git action CI/CD processes as needed',
        ],
      },
      {
        title: 'Senior Programmer',
        during: 'January 2021 - October 2021',
        description: [
          'Design and construct the structure of the project easy to maintain and scale',
          'Using React.js to develop several products related to the eCommerce system',
          'Using React Native to deploy web projects to mobile',
          'Implement an app that works with BLE devices using React Native.',
        ],
      },
    ],
  },
  {
    companyName: 'Shoalter Technology',
    location: 'Taiwan, Taipei',
    info: [
      {
        title: 'Analyst Programmer',
        during: 'October 2021 - Present',
        description: [
          'Design and construct the structure of the project easy to maintain and scale',
          'Using React.js to develop several products related to the eCommerce system',
          'Using React Native to deploy web projects to mobile',
          'Implement an app that works with BLE devices using React Native.',
        ],
      },
      {
        title: 'Senior Programmer',
        during: 'January 2021 - October 2021',
        description: [
          'Design and construct the structure of the project easy to maintain and scale',
          'Using React.js to develop several products related to the eCommerce system',
          'Using React Native to deploy web projects to mobile',
          'Implement an app that works with BLE devices using React Native.',
        ],
      },
    ],
  },
  {
    companyName: 'Actura',
    location: 'Taiwan, Taipei',
    info: [
      {
        title: 'Software Manager',
        during: 'April 2019 - June 2020',
        description: [
          'Planning, scheduling, and adjusting projects of the department',
          'Communicate and coordinate with other departments',
          'Evaluate new technologies to improve the quality and performance of the software',
          'Design and Implemented / created the full life cycle process for one software project.',
        ],
      },
      {
        title: 'Software Engineer',
        during: 'October 2017 - April 2019',
        description: [
          'Design and build cross-platform desktop apps using electron framework',
          'Developing and maintaining firmware of devices, including the libraries using C++',
          'Implemented and created three software products successfully to market',
          'Working on the communication between the device and app via BLE or USB serial port',
        ],
      },
    ],
  },
  {
    companyName: 'EAVE',
    location: 'UK, London',
    info: [
      {
        title: 'Software Engineer',
        during: 'August 2016 - July 2017',
        description: [
          'Developing mobile applications to enhance the user experience with headset',
          'Building websites using Javascript to display the data collected from headset product',
          'Design and develop an indoor localization system using BLE for noise data collection',
          'Design and implement the protocol between the headsets product and the data receiver',
        ],
      },
    ],
  },
];

function WorkExperience() {
  const experience = EXPERIENCE.map((company) => {
    return (
      <section id="work" className=" flex text-c2 py-4 sm:mx-10" key={company.companyName}>
        <div className="flex flex-row">
          <div className="sm:min-w-[300px] text-left">
            <div className="flex flex-col justify-start sm:justify-center ">
              <div className="text-xs sm:text-xl lg:text-2xl">{company.info[0].title}</div>
              <div className="text-xs sm:text-base">{company.companyName}</div>
            </div>
            <div className="flex flex-col text-xs sm:text-base justify-start sm:justify-center">
              <span className="text-bluedark/75">{company.info[0].during}</span>
              <span className="text-c4/75 ">{company.location}</span>
            </div>
          </div>
          <div className="hidden sm:block">
            {company.info[0].description.map((el) => {
              return (
                <div key={company.companyName} className="flex items-center py-2">
                  -<p className="ml-2">{el}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  });
  return (
    <div className="relative h-full">
      <h1 className="text-xl sm:text-2xl font-medium text-c2 border-b-2 border-c4 pl-4 mb-2 text-center">
        WORK
      </h1>
      <div className="flex flex-col w-full divide-y overflow-scroll h-5/6">{experience}</div>
    </div>
  );
}

export default WorkExperience;
