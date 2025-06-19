import React ,{useRef} from 'react'
import img_x from './../images/contact.jpg'
// import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import feedimg from './../images/feedback.png'
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
  const form = useRef();
  const { isDarkMode } = useTheme();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v6z4web', 'template_71rki5m', form.current, 'WBsHhIONN4glZMqDK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
<form ref={form} onSubmit={sendEmail}>
        <section className={`body-font relative transition-colors duration-300 ${isDarkMode ? 'text-gray-100 bg-gray-900' : 'text-gray-600 bg-white'}`}>    <div className="container px-5 py-4 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 mt-2 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src={feedimg}></img>
        </div>
    <div className={`lg:w-1/2 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 md:mt-0 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <h2 className={`text-2xl text-center mb-1 font-bold title-font ${isDarkMode ? 'text-white' : 'text-black'}`}>Feedback Form</h2>
      <p className={`leading-relaxed text-center ${isDarkMode ? 'text-gray-300' : 'text-black'}`}></p>
      <div class="relative mb-1">
        <label for="name" class="leading-7 text-center text-sm text-black">Name</label>
        <input type="text" id="name" name="name" class="w-full bg-gray-200 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
      </div>
      <div class="relative mb-1">
        <label for="email" class="leading-7 text-center text-sm text-black">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-gray-200 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
      </div>
      <div class="relative mb-1">
        <label for="message" class="leading-7 text-center text-sm text-black">Feedback Message</label>
        <textarea id="message" name="message" class="w-full bg-gray-200 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button class="text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg">Submit</button>
   
    </div>
  </div>
</section>
    </form>

    //create a form with 3 input fields and a submit button and use firebase  
  )
}

export default Contact