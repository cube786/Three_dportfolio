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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  postgresql,
  jquery,
  express,
  giticon,
  linkedin,
  phone
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "System Administrator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name:"Express",
    icon:express,
  },
  {
    name:"jQuery",
    icon:jquery,
  }
  
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Trouvailler Enterprises Pvt LTD",
    icon: starbucks,
    iconBg: "#383E56",
    date: "April 2023 - June 2024",
    points: [
      "Designed and developed responsive user interfaces using React.js and Tailwind CSS,ensuring compatibility and improved user engagement.",
      "Integrated RESTful APIs to streamline back-end communication, optimizing data retrieval and reducing loading times.",
      "Ensured full compatibility across devices, from mobile to desktop, providing a consistent and user-friendly interface, increasing mobile user engagement.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "System Admin",
    company_name: "Star Link Information Technology",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2024 - Jan 2025",
    points: [
      "Assisted in configuring and managing Windows Servers, ensuring optimal performance and system reliability.",
      "Supported Active Directory tasks, including user account updates and access management.",
      "Developed skills in using administrative tools and software, including Microsoft Office Suite and scheduling platforms.",
      "Followed team leader to understand workflow optimization, task delegation, and overall office management strategies.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Island Portfolio",
    description:
      "Interactive 3D developer portfolio built with React, Three.js (react-three-fiber & drei) and Tailwind CSS, featuring animated 3D models, smooth Framer Motion transitions, a projects showcase and experience timeline, plus a responsive contact.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/cube786/3D_PORTFOLIO",
    live_site: "https://3-d-portfolio-omega-sandy.vercel.app/",
  },
  {
    name: "Cube Portfolio",
    description:
      "Personal developer portfolio showcasing my bio, work history, skills stack, and hobbies—built with React, Chakra UI, and hosted on Vercel; it also features seamless navigation through interactive sections for Works, Posts, Stack, and Contact.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chakra-ui",
        color: "green-text-gradient",
      },
      {
        name: "vercel",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/cube786/Cube_Portfolio",
    live_site: "https://cube-portfolio-iota.vercel.app/",
  },
];
const socialLinks = [
    // {
    //     name: 'Contact',
    //     iconUrl: contact,
    //     link: '/contact',
    // },
    {
    name: 'Phone',
    iconUrl: phone, 
    link: 'tel:+971565916778',
    type: 'external', // treat like external <a>
  },

    {
        name: 'GitHub',
        iconUrl: giticon,
        link: 'https://github.com/cube786',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/aneesh-abdul-rahman-2b67b1286/',
    },
    
];

export { services, technologies, experiences, testimonials, projects, socialLinks };