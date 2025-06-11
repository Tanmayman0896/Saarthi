import React from "react";
import lead from './leaders';
import { useSpeechSynthesis } from 'react-speech-kit';

const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Our Services', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href:'#leadership'},
]
const stats = [
  { name: 'Full-Time Tutors', value: '160+' },
  { name: 'Students Tutored', value: '300+' },
  { name: 'Lecture Videos', value: '450+' },
  { name: 'Price', value: 'Free' },
]
const people = [
  {
    name: 'Sarthak',
    role: 'Backend Developer',
    imageAlt: 'Portrait of Sarthak Routray',
      
      
  },
  {
    name: 'Tanmoy',
    role: 'Fullstack Developer',
    imageAlt: 'Portrait of Tanmoy Mandal',
    
  },
  
]

function About1() {
  const { speak } = useSpeechSynthesis();

  return (
    <div className="relative overflow-hidden bg-gray-900 py-35 sm:py-40">
      <img className="absolute inset-0 object-cover object-right w-full h-full bg-gradient-to-t -z-10 md:object-center" alt="profile" />
      <svg
        viewBox="0 0 1097 845"
        aria-hidden="true"
        className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
      >
        {/* ... (SVG path definition) */}
      </svg>
      <svg
        viewBox="0 0 1097 845"
        aria-hidden="true"
        className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
      >
        {/* ... (SVG path definition) */}
      </svg>
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-blue-500 sm:text-6xl">OUR VISION</h2>
          <p className="mt-6 text-lg leading-8 text-white">
            Our aim is to provide equal opportunity of Education to everyone
            irrespective of their disability.
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-10 ml-8 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 text-base font-semibold leading-7 text-blue-500 gap-y-6 gap-x-8 sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onMouseOver={() => speak({ text: link.name })}
              >
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="grid grid-cols-1 gap-8 mt-16 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-blue-500">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Leadership */}

      <div className="py-24 mt-40 bg-gradient-to-t sm:py-32" id="leadership">
        <div className="grid px-6 mx-auto max-w-7xl gap-y-20 gap-x-8 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {/* Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse. */}
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="rounded-full h-25 w-25" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-300">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About1;