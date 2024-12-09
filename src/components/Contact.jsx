import { CONTACT } from "../constants"
import { motion } from "framer-motion"




const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2 
      whileInView={{opacity:1, y: 0}}
      initial= {{opacity: 0, y: -100}}
      transition={{duration: 1}}
      className="my-10 text-center text-4xl">Get in Touch</motion.h2>
      <motion.div
        whileInView={{opacity:1, x: 0}}
        initial= {{opacity: 0, x: -100}}
        transition={{duration: 1}}
        className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">{CONTACT.email}</a>
      </motion.div>
      <div className="my-10 text-center text-2xl">
      <a href="./tebogoResume.pdf" download="Tebogo's Resume" target='_blank'>
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
      <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
      <span>Download Resume</span>
      </button>
      </a>
      </div>
    </div>
    
  )
}

export default Contact
