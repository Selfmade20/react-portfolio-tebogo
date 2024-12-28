import { CONTACT } from "../constants"
import { motion } from "framer-motion"
import resume from "../assets/Resume.pdf"


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
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">      
      <a href={resume} download="Tebogo Selamolela's Resume">Download Resume</a>
      </button>
      </div>
    </div>
    
  )
}

export default Contact
