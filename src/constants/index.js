import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  hp_white,
  hp_blue,
  utd,
  ambitech,
  pccoe,
  carrent,
  jobit,
  tripguide,
  threejs,
  the_lady,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const sketches = [
  {
    title: 'The Lady',
    image: the_lady,
    link: 'https://www.instagram.com/p/C4nt-EkyCea/?img_index=1',
  },
  {
    title: 'React Native Developer',
    image: the_lady,
    link: 'https://www.instagram.com/p/C4nt-EkyCea/?img_index=1',
  },
  {
    title: 'Backend Developer',
    image: the_lady,
    link: 'https://www.instagram.com/p/C4nt-EkyCea/?img_index=1',
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Full stack developer',
    company_name: 'IEEE UTD',
    icon: utd,
    iconBg: '#E6DEDD',
    date: 'August 2024 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Software Applications Engineer',
    company_name: 'Hewlett Packard',
    icon: hp_blue,
    iconBg: '#E6DEDD',
    date: 'July 2023 - August 2024',
    points: [
      'Enhanced frontend performance in React.js using Webpack, Jenkins, Jira, and AWS, contributing to a scalable platform with improved security.',
      'Optimized the sign-up process by integrating Google Maps for auto-suggestions, reducing sign-up time by 70% & improving user experience.',
      'Created a map widget for partner dashboards, enabling real-time regional customer visibility & streamlined identification by counts and names.',
      'Significantly boosted code efficiency by 30% through refactoring, adopting functional components, and a microservice architecture.',
    ],
  },
  {
    title: 'R&D Software Intern',
    company_name: 'Hewlett Packard',
    icon: hp_blue,
    iconBg: '#E6DEDD',
    date: 'January 2023 - July 2023',
    points: [
      "Spearheaded the development of Plantify (POC for HP's initiative) enabling the planting of a sapling based on customer purchases.",
      'Led agile practices as Scrum Master, coordinating UI design in Figma & React, with secure token integration, optimizing performance by 20%.',
      'Enhanced localization by adding Korean language support, and gained exposure to tools like EC2, S3, and CDN for streamlined deployment.',
    ],
  },
  {
    title: 'UI/UX Developer Intern',
    company_name: 'Ambitech Pvt Ltd',
    icon: ambitech,
    iconBg: '#E6DEDD',
    date: 'September 2021 - March 2022',
    points: [
      'Designed a user-friendly healthcare app for diabetic people, enabling glucose reading storage for multiple family members & reminders.',
      'Integrated Bluetooth connectivity with a glucometer, enabling data syncing & online purchasing of medications & medical equipment.',
      'Enhanced overall experience for older adults by designing an intuitive interface, resulting in a significant 40% increase in app usage.',
    ],
  },
  {
    title: 'Content Designer',
    company_name: 'IEEE PCCOE',
    icon: pccoe,
    iconBg: '#E6DEDD',
    date: 'January 2021 - February 2023',
    points: [
      'Organized over 10+ cultural and technical events, showcasing strong planning & coordination skills.',
      'One of the technical events was a coding competition, which sparked interest in competitive programming among students.',
      'Designed 4 newsletters with creative layouts and engaging content, significantly enhancing communication and participation.',
    ],
  },
];

const publications = [
  {
    publication:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    publication:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    publication:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];

export {
  services,
  sketches,
  technologies,
  experiences,
  publications,
  projects,
};
