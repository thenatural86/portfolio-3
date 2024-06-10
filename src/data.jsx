import { nanoid } from 'nanoid'
import { FaHtml5, FaJs, FaReact, FaNode, FaPython, FaGem } from 'react-icons/fa'
import project1 from './assets/project-1.png'
import project2 from './assets/project-2.png'

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
]

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript & Typescript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript and TypeScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Node',
    icon: <FaNode className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in Node.js, adept at building scalable and high-performance backend services and APIs, ensuring robust and efficient server-side operations.',
  },
  {
    id: nanoid(),
    title: 'Ruby',
    icon: <FaGem className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in Ruby, specializing in crafting elegant and maintainable applications, leveraging the power of Ruby on Rails for rapid development and deployment..',
  },
  {
    id: nanoid(),
    title: 'Python',
    icon: <FaPython className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in Python, proficient in developing versatile and efficient software solutions, with a strong emphasis on readability and maintainability of code.',
  },
]

export const projects = [
  {
    id: nanoid(),
    img: project1,
    url: 'https://job-tracker-zzso.onrender.com/',
    github: 'https://github.com/thenatural86/job-tracker?tab=readme-ov-file',
    title: 'job tracker',
    text: 'Welcome to Job Tracker, a full-stack web application built to help software engineers manage and streamline their job search. Track your job applications, discover new opportunities, and land your next dream job!',
  },
  {
    id: nanoid(),
    img: project2,
    url: 'https://cozys-corner.netlify.app/',
    github: 'https://github.com/thenatural86/cozy-app',
    title: 'cozy corner',
    text: 'E-commerce application that allows a user to login and browse through products that can be totaled, added to their cart and purchased using a credit card. .',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
]
